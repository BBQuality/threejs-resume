import { createScene } from './scene';
import { setupThemeToggle } from './theme';
import { createHeroSection } from './components/HeroSection';
import { createProjectsSection } from './components/ProjectsSection';
import { createWorkflowSection } from './components/WorkflowSection.ts';
import { createSkillsSection } from './components/SkillsSection';
import { createRoadmapSection } from './components/RoadmapSection';
import { observeProjectCards } from './utils/scrollObserver';
import { observeWorkflowSteps } from './utils/scrollObserver';

const canvas = document.getElementById('scene-canvas') as HTMLCanvasElement;

createScene(canvas);
setupThemeToggle();
createHeroSection();
createProjectsSection();
observeProjectCards();
createWorkflowSection();
observeWorkflowSteps();
createSkillsSection();
createRoadmapSection();