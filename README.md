# manan2107bhavsar.github.io

My portfolio site: drafting and design work from Saskatchewan Polytechnic's Engineering Design & Drafting Technology program, 3D models you can rotate in the browser, my co-op work with the City of Saskatoon, and side projects.

Live at **https://manan2107bhavsar.github.io**

Built with [Astro](https://astro.build) and Google's [`<model-viewer>`](https://modelviewer.dev). Every push to `main` builds and publishes the site with GitHub Actions (`.github/workflows/deploy.yml`).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

## Add a project

1. Export the model as glTF binary (`.glb`):
   - **Inventor 2023+**: File → Export → CAD Format → glTF.
   - **Revit**: export with a glTF exporter add-in, or export FBX and convert it.
2. Compress it (keeps pages fast):
   ```bash
   npx @gltf-transform/cli optimize in.glb public/models/my-project.glb --compress draco --instance false --texture-compress webp --texture-size 1024
   ```
   Keep `--instance false`: instanced bolts/nuts make the viewer measure the model wrong.
3. Add a poster image (`public/posters/my-project.webp`, about 1200×900) and the drawing PDF (`public/drawings/`) if you have them.
4. Copy any file in `src/content/projects/` to `my-project.md` and edit the fields:
   - `kind: academic` shows it on /projects, `kind: side` on /side-projects
   - `model`, `poster`, `sizeMB`, `drawings` are optional
   - `featured: true` puts it on the home page
5. `npm run dev`, check it, then commit and push.

## Structure

```
src/
  styles/global.css        design tokens (paper, ink, one accent) and shared classes
  layouts/Base.astro       page shell: header, footer with contact form
  layouts/ProjectLayout    title block + 3D viewer + write-up + drawings
  components/              ModelViewer, TitleBlock, ProjectCard, SectionHead, Header, Footer
  content/projects/*.md    one file per project
  pages/                   home, work (co-op), projects, side-projects, about, resume, 404
public/
  models/   posters/   drawings/   decoders/draco/ (self-hosted, no CDN)
```
