import CorporateHeader from '@/components/layout/CorporateHeader';
import CorporateFooter from '@/components/layout/CorporateFooter';
import ProjectCaseStudy from '@/components/portfolio/ProjectCaseStudy';
import { categoryMap, projects, projectMap } from '@/components/portfolio/portfolioData';

export function getStaticPaths() {
  return { paths: projects.map((project) => ({ params: { slug: project.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { project: projectMap[params.slug] } };
}

export default function ProjectPage({ project }) {
  const category = categoryMap[project.category];
  return <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-300/30 selection:text-white"><CorporateHeader /><main><ProjectCaseStudy project={project} category={category} /></main><CorporateFooter /></div>;
}
