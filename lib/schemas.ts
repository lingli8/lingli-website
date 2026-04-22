import { z } from 'zod';

// ── 17.1 profile.json ────────────────────────────────────────────────────────

export const ProfileSchema = z.object({
  name: z.string(),
  fullName: z.string(),
  tagline: z.string(),
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  social: z.object({
    github: z.string().url(),
    linkedin: z.string().url(),
    twitter: z.string().url().optional(),
  }),
  resumes: z.object({
    data: z.string(),
    ai: z.string(),
    sde: z.string(),
  }),
});

// ── 17.2 status.json ─────────────────────────────────────────────────────────

export const StatusSchema = z.object({
  mode: z.enum(['job-seeking', 'employed', 'sabbatical']),
  role: z.string(),
  education: z.object({
    institution: z.string(),
    degree: z.string(),
    graduationDate: z.string(),
    classOf: z.string(),
  }),
  availability: z.object({
    seeking: z.array(z.string()),
    fullTimeStart: z.string(),
    internshipsOpen: z.boolean(),
    location: z.string(),
    visa: z.string(),
  }),
  currentActivity: z.string(),
});

// ── 17.3 skills.json ─────────────────────────────────────────────────────────

export const SkillLevelSchema = z.enum(['proficient', 'comfortable', 'familiar', 'learning']);

export const SkillSchema = z.object({
  name: z.string(),
  usedIn: z.string().optional(),
  level: SkillLevelSchema,
});

export const SkillCategorySchema = z.object({
  id: z.string(),
  icon: z.string(),
  name: z.string(),
  skills: z.array(SkillSchema),
});

export const SkillsSchema = z.object({
  categories: z.array(SkillCategorySchema),
});

// ── 17.4 experience.json ─────────────────────────────────────────────────────

export const ExperienceEntrySchema = z.object({
  id: z.string(),
  type: z.enum(['work', 'education']),
  icon: z.string(),
  role: z.string(),
  org: z.string(),
  location: z.string().optional(),
  start: z.string(),
  end: z.string(),
  bullets: z.array(z.string()).optional(),
  coursework: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  hiddenEasterEgg: z.string().optional(),
});

export const ExperienceSchema = z.object({
  timeline: z.array(ExperienceEntrySchema),
});

// ── 17.5 projects.json ───────────────────────────────────────────────────────

export const ProjectMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const ProjectLinksSchema = z.object({
  github: z.string().url().optional(),
  demo: z.string().url().nullable().optional(),
  caseStudy: z.string().optional(),
});

export const ProjectSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  badge: z.string().optional(),
  oneLiner: z.string(),
  stack: z.array(z.string()),
  metrics: z.array(ProjectMetricSchema).optional(),
  links: ProjectLinksSchema.optional(),
  date: z.string(),
  featured: z.boolean().optional(),
  archived: z.boolean().optional(),
});

export const ProjectsSchema = z.object({
  featured: z.array(z.string()),
  projects: z.record(z.string(), ProjectSchema),
});

// ── 17.6 achievements.json ───────────────────────────────────────────────────

export const AchievementEntrySchema = z.object({
  id: z.string(),
  icon: z.string(),
  title: z.string(),
  project: z.string().optional(),
  description: z.string(),
  award: z.string().optional(),
  date: z.string(),
  link: z.string().optional(),
  spotlight: z.boolean(),
});

export const AchievementsSchema = z.object({
  featured: AchievementEntrySchema,
  archive: z.array(AchievementEntrySchema),
});

// ── 17.7 hobbies.json ────────────────────────────────────────────────────────

export const HobbyItemSchema = z.object({
  icon: z.string(),
  label: z.string(),
  content: z.string(),
  footnote: z.string().optional(),
});

export const HobbiesSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  items: z.array(HobbyItemSchema),
});

// ── 17.8 about.mdx (front matter only) ──────────────────────────────────────

export const AboutFrontMatterSchema = z.object({
  photo: z.string(),
  lastReviewed: z.string(),
});

// ── 17.9 animation-scenes.json ───────────────────────────────────────────────

export const SceneTextSchema = z.object({
  main: z.string(),
  side: z.string().optional(),
});

export const ScenePopupSchema = z.object({
  main: z.array(z.string()).optional(),
  side: z.array(z.string()).optional(),
});

export const SceneEasterEggSchema = z.object({
  id: z.string(),
  sprite: z.string(),
  position: z.string(),
  label: z.string().optional(),
});

export const AnimationSceneSchema = z.object({
  id: z.string(),
  duration: z.number(),
  // Scene 0: cold-open content
  content: z.object({ tagline: z.string().optional() }).optional(),
  // Scenes with backgrounds / characters / popups
  background: z.string().optional(),
  character: z.string().optional(),
  popup: ScenePopupSchema.optional(),
  easterEgg: SceneEasterEggSchema.optional(),
  effects: z.array(z.string()).optional(),
  // Template variable substitution at render time
  templateVars: z.array(z.string()).optional(),
  // Legacy text field — kept for backwards compatibility
  text: SceneTextSchema.optional(),
});

export const AnimationScenesSchema = z.object({
  scenes: z.array(AnimationSceneSchema),
});

// ── 17.10 meta.json ──────────────────────────────────────────────────────────

export const MetaSchema = z.object({
  site: z.object({
    title: z.string(),
    description: z.string(),
    ogImage: z.string(),
    lastDeployed: z.string(),
  }),
  footer: z.object({
    prompt: z.string(),
    copyright: z.string(),
    builtWith: z.string(),
  }),
  consoleEasterEgg: z.boolean(),
  easterEggCount: z.number(),
});

// ── Inferred types ────────────────────────────────────────────────────────────

export type Profile = z.infer<typeof ProfileSchema>;
export type Status = z.infer<typeof StatusSchema>;
export type SkillLevel = z.infer<typeof SkillLevelSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type SkillCategory = z.infer<typeof SkillCategorySchema>;
export type Skills = z.infer<typeof SkillsSchema>;
export type ExperienceEntry = z.infer<typeof ExperienceEntrySchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type ProjectMetric = z.infer<typeof ProjectMetricSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Projects = z.infer<typeof ProjectsSchema>;
export type AchievementEntry = z.infer<typeof AchievementEntrySchema>;
export type Achievements = z.infer<typeof AchievementsSchema>;
export type HobbyItem = z.infer<typeof HobbyItemSchema>;
export type Hobbies = z.infer<typeof HobbiesSchema>;
export type AboutFrontMatter = z.infer<typeof AboutFrontMatterSchema>;
export type ScenePopup = z.infer<typeof ScenePopupSchema>;
export type SceneEasterEgg = z.infer<typeof SceneEasterEggSchema>;
export type AnimationScene = z.infer<typeof AnimationSceneSchema>;
export type AnimationScenes = z.infer<typeof AnimationScenesSchema>;
export type Meta = z.infer<typeof MetaSchema>;
