// Construye URLs respetando `base` (necesario cuando el sitio vive en usuario.github.io/<repo>/).
export const url = (path = ''): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
