import { FileHandle } from 'fs/promises';

/**
 * will open the directory picker and allow users to select their corpora folder
 * @returns array of [filename: string, fileHandle: fileHandle]
 */
export const getCorporaFolder: Array<any> | any = async () => {
  try {
    const folder = await window.showDirectoryPicker();
    const fileIterable = folder.entries();
    const fileHandles: Array<FileHandle> = [];
    let tempFile = (await fileIterable.next()).value;
    while (tempFile) {
      fileHandles.push(tempFile);
      tempFile = (await fileIterable.next()).value;
    }
    console.log(fileHandles);
    return fileHandles;
  } catch (err) {
    console.error('failed to select file');
    console.error(err);
  }
};

export const readFile = async (fileHandle: FileHandle) => {};

export const writeFile = async (fileHandle: FileHandle, data: any) => {};
