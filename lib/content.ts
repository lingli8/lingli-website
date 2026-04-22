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

// Parse all content files at module load time.
// parse() validates AND returns properly-typed data — if any file is
// malformed the build fails here, before any component sees the data.
export const content = {
  profile:         ProfileSchema.parse(profileData),
  status:          StatusSchema.parse(statusData),
  skills:          SkillsSchema.parse(skillsData),
  experience:      ExperienceSchema.parse(experienceData),
  projects:        ProjectsSchema.parse(projectsData),
  achievements:    AchievementsSchema.parse(achievementsData),
  hobbies:         HobbiesSchema.parse(hobbiesData),
  meta:            MetaSchema.parse(metaData),
  animationScenes: AnimationScenesSchema.parse(animationScenesData),
  // about: loaded separately — about.mdx requires MDX processing
  // (e.g. next-mdx-remote). Import and render in the About component.
};

