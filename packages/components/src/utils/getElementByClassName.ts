export function getElementByClassName(container = document, classname: string) {
  return container.getElementsByClassName(classname)[0];
}
