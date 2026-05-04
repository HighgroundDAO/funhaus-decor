import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

function getAllMdxFiles(dir: string, base = ""): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllMdxFiles(path.join(dir, entry.name), rel));
    } else if (entry.name.endsWith(".mdx")) {
      files.push(rel);
    }
  }
  return files;
}

export function getContentSlugs(): string[][] {
  return getAllMdxFiles(CONTENT_DIR).map((file) =>
    file.replace(/\.mdx$/, "").split(path.sep)
  );
}

export function getContentBySlug(slug: string[]) {
  const filePath = path.join(CONTENT_DIR, ...slug) + ".mdx";
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data, content, filePath };
}
