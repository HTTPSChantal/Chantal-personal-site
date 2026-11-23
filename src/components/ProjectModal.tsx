import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2a2233]/45 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[#eadfe6] bg-[#fbf7f4] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex h-44 items-end justify-between bg-gradient-to-br ${project.coverGradient} p-7`}
        >
          <div>
            <p className="text-xs font-medium tracking-wide text-[#2a2233]/75">
              {project.category} · {project.yearOrEvent}
            </p>
            <h3
              id="project-modal-title"
              className="mt-1 font-serif text-3xl italic text-[#2a2233]"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-[#2a2233] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-[#7050e6]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 p-7 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#eadfe6] pb-4 text-sm text-[#685e74]">
            <span>{project.role}</span>
            <span className="font-medium text-[#7050e6]">{project.status}</span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <h4 className="text-xs font-semibold tracking-wider text-[#685e74] uppercase">
                Problem
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#2a2233]/90">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-wider text-[#685e74] uppercase">
                Approach
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#2a2233]/90">{project.approach}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold tracking-wider text-[#685e74] uppercase">
                Reflection
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#2a2233]/90">{project.takeaway}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <p className="text-xs text-[#685e74]">{project.meta.join(' · ')}</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#2a2233] px-5 py-2 text-sm font-medium text-[#2a2233] transition-colors hover:bg-[#2a2233] hover:text-white"
            >
              Done reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
