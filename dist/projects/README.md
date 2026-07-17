# Project media

Put project media files in this folder.

Suggested names:

- `growshi-cover.webp`
- `growshi-gameplay.mp4`
- `forest-cover.webp`
- `forest-gameplay.mp4`
- `cuberacer-cover.webp`
- `cuberacer-gameplay.mp4`

To use a video, set the project's `video` field in `src/App.jsx`:

```js
video: "/projects/growshi-gameplay.mp4",
```

The video automatically plays muted and loops in the project hero. The Play button opens it with controls and sound.
