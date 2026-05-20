import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { devProjects } from '@/content/dev/projects';
import { Badge } from '@/components/ui/Badge';
import { VimeoEmbed } from '@/components/rigger/VimeoEmbed';

export function generateStaticParams() {
  return devProjects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = devProjects.find((p) => p.id === id);
  return { title: project ? `${project.title} — Sara Hoces` : 'Proyecto' };
}

export default async function DevProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = devProjects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16">

        {/* Back */}
        <Link
          href="/dev"
          className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-navy-muted transition-colors hover:text-navy"
        >
          <span aria-hidden="true">←</span>
          {'// volver'}
        </Link>

        {/* Header */}
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-comment">
          {'// dev project'}
        </p>
        <h1 className="text-4xl font-bold text-navy md:text-5xl">{project.title}</h1>
        <p className="mt-2 text-navy-muted">{project.year}</p>

        {/* Video */}
        {project.videoUrl && (
          <div className="mt-10">
            <VimeoEmbed url={project.videoUrl} />
          </div>
        )}

        {/* Imagen principal (solo si no hay vídeo) */}
        {project.imageUrl && !project.videoUrl && (
          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-lg bg-surface">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        )}

        {/* Descripción */}
        <p className="mt-10 text-lg leading-relaxed text-navy-muted">{project.description}</p>

        {/* Stack */}
        <div className="mt-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-navy-muted">
            {'// stack técnico'}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>

        {/* Galería */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-navy-muted">
              {'// galería'}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-lg bg-surface">
                  <Image
                    src={img}
                    alt={`${project.title} — captura ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 448px"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {(project.repoUrl || project.liveUrl) && (
          <div className="mt-12 flex gap-8">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm uppercase tracking-widest text-navy-muted transition-colors hover:text-navy"
              >
                {'// GitHub →'}
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm uppercase tracking-widest text-comment transition-opacity hover:opacity-70"
              >
                {'// ver demo →'}
              </a>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
