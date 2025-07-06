import { ProjectProps } from '../_components/projects';
import { promises as fs } from 'fs';

export default async function ExtractProjectJsonData(): Promise<ProjectJsonData> {
  const file = await fs.readFile(
    process.cwd() + '/src/app/projects/projects.json',
    'utf-8',
  );
  const data = JSON.parse(file);

  return data;
}

interface ProjectJsonData {
  startups: [ProjectProps];
  apps: [ProjectProps];
  packages: [ProjectProps];
}
