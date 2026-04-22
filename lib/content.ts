import profileData from '@/content/profile.json';
import statusData from '@/content/status.json';
import skillsData from '@/content/skills.json';
import experienceData from '@/content/experience.json';
import projectsData from '@/content/projects.json';
import achievementsData from '@/content/achievements.json';
import hobbiesData from '@/content/hobbies.json';
import metaData from '@/content/meta.json';
import animationScenesData from '@/content/animation-scenes.json';

import {
  ProfileSchema,
  StatusSchema,
  SkillsSchema,
  ExperienceSchema,
  ProjectsSchema,
  AchievementsSchema,
  HobbiesSchema,
  MetaSchema,
  AnimationScenesSchema,
} from '@/lib/schemas';

// Validate all content files at module load time.
// If any file is malformed, the build fails here — not in production.
ProfileSchema.parse(profileData);
StatusSchema.parse(statusData);
SkillsSchema.parse(skillsData);
ExperienceSchema.parse(experienceData);
ProjectsSchema.parse(projectsData);
AchievementsSchema.parse(achievementsData);
HobbiesSchema.parse(hobbiesData);
MetaSchema.parse(metaData);
AnimationScenesSchema.parse(animationScenesData);

export const content = {
  profile: profileData,
  status: statusData,
  skills: skillsData,
  experience: experienceData,
  projects: projectsData,
  achievements: achievementsData,
  hobbies: hobbiesData,
  meta: metaData,
  animationScenes: animationScenesData,
  // about: loaded separately — about.mdx requires MDX processing
  // (e.g. next-mdx-remote). Import and render in the About component.
};

export type Profile = typeof profileData;
export type Status = typeof statusData;
export type Skills = typeof skillsData;
export type Experience = typeof experienceData;
export type Projects = typeof projectsData;
export type Achievements = typeof achievementsData;
export type Hobbies = typeof hobbiesData;
export type Meta = typeof metaData;
export type AnimationScenes = typeof animationScenesData;
