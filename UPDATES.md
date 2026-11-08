🪶 Known Technical Debt

### 1. Theme script migration (Next.js 16 compatibility)
- **Location**: app/layout.tsx (line ~37)
- **Issue**: Uses `<script dangerouslySetInnerHTML>` pattern. 
  Next.js 16 warns this script won't re-execute on client 
  navigation (but we don't need it to — it's a one-shot 
  FOUT prevention).
- **Severity**: Low. Functionality is unaffected. Warning 
  is dev-console only.
- **Fix plan**: Migrate to `<Script id="theme-init" 
  strategy="beforeInteractive">` when:
    - Adding another pre-hydration script (e.g., analytics), OR
    - Upgrading to Next.js 17+ where pattern may be removed
- **Estimated effort**: 15 minutes
- **Tracked**: 2026-04-22



TODOLIST

- [ ] 实习正式开始后，加回 experience.json 的 ai-intern 条目
     - role: "AI Engineering Intern"  
     - org: [实习公司名]
     - start: [真实开始日期]
     - bullets: 等有成果后填