import { notFound } from 'next/navigation';
import Link from 'next/link';
import { devProjects } from '@/content/dev/projects';
import { Badge } from '@/components/ui/Badge';
import { YouTubeEmbed } from '@/components/dev/YouTubeEmbed';
import { ProjectImageViewer } from '@/components/dev/ProjectImageViewer';
import { IframeEmbed } from '@/components/dev/IframeEmbed';

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

  const images = [
    ...(project.imageUrl ? [project.imageUrl] : []),
    ...(project.gallery ?? []),
  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pt-6 pb-16">

        {/* Back */}
        <Link
          href="/dev"
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-navy-muted transition-colors hover:text-navy"
        >
          <span aria-hidden="true">←</span>
          {'// volver'}
        </Link>

        {/* Header */}
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-comment">
          {'// dev project'}
        </p>
        <h1 className="text-4xl font-bold text-navy md:text-5xl">{project.title}</h1>
        <p className="mt-2 font-mono text-sm text-navy-muted">{project.year}</p>

        {/* Demo en vivo o galería de imágenes */}
        {project.embedUrl ? (
          <div className="mt-4">
            <IframeEmbed url={project.embedUrl} title={project.title} />
          </div>
        ) : images.length > 0 && (
          <div className="mt-4">
            <ProjectImageViewer images={images} title={project.title} liveUrl={project.liveUrl} />
          </div>
        )}

        {/* Descripción */}
        <p className="mt-10 text-lg leading-relaxed text-navy-muted">{project.description}</p>

        {/* Stack */}
        <div className="mt-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-navy">
            {'// stack técnico'}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} className="text-navy! border-navy/40!">{t}</Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.repoUrl || project.liveUrl) && (
          <div className="mt-8 flex gap-8">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-2 border-navy px-4 py-2 font-mono text-base font-bold uppercase tracking-widest text-navy transition-all hover:bg-navy hover:text-white"
              >
                {'// GitHub'}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            )}
          </div>
        )}

        {/* Vídeo YouTube */}
        {project.youtubeUrl && (
          <div className="mt-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-navy-muted">
              {'// demo en vídeo'}
            </p>
            <YouTubeEmbed url={project.youtubeUrl} />
          </div>
        )}

      </div>
    </div>
  );
}
