export const componentTemplateTypescript = (
  name: string
) => `import s from './${name}.module.scss';

export type ${name}Props = {}

const ${name} = ({}: ${name}Props) => {
  return (
    <div className={s.${name}}>${name}</div>
  );
};

export default ${name};
`;

export const indexTemplateTypescript = (name: string) =>
  `export * from './${name}.tsx'`;

export const styleTemplateTypescript = (name: string) => `.${name} {}`;

export const componentTemplateJavascript = (
  name: string
) => `import s from './${name}.module.scss';

const ${name} = () => {
  return (
    <div className={s.${name}}>${name}</div>
  );
};

export default ${name};
`;

export const indexTemplateJavascript = (name: string) =>
  `export * from './${name}.jsx'`;

export const styleTemplateJavascript = (name: string) => `.${name} {}`;
