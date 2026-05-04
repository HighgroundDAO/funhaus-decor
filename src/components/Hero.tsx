export function PageHero({
  h1,
  subtitle,
  image,
}: {
  h1: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="mb-12">
      {image && (
        <img
          src={image}
          alt={h1}
          className="w-full rounded-lg mb-6 object-cover max-h-[400px]"
        />
      )}
      <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4">
        {h1}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </section>
  );
}
