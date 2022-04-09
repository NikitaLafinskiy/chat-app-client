export const useClasses = (
  initialName: string,
  additionalClassName: string | undefined
): string => {
  const classes = additionalClassName
    ? `${additionalClassName} ${initialName}`
    : `${initialName}`;

  return classes;
};
