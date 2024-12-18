import * as fs from "fs/promises";

// Creating Directory / folder
// try {
//   await fs.mkdir("c:\\nodejs\\courses", { recursive: true });
//   console.log("Folder Created...");
// } catch (error) {
//   console.log(error);
// }

// Reading the content

// try {
//   const files = await fs.readdir("c:\\nodejs");
//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

// Remove Folder / directory (only delete if it is empty)

// try {
//   await fs.rmdir("c:\\nodejs\\courses");
// } catch (error) {
//   console.log(error);
// }

// Creating and writing files

// try {
//   await fs.writeFile("README.md", "Hello Nodejs");
// } catch (error) {
//   console.log(error);
// }

// Reading file

// try {
//   const data = await fs.readFile("README.md", "utf-8");
//   await fs.appendFile("README.md", "hello sagar");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

// Copying file

// try {
//   await fs.copyFile("README.md", "info.txt");
// } catch (error) {
//   console.log(error);
// }

// Get file info

try {
  const info = await fs.stat("info.txt");
  //   console.log(info);
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (error) {
  console.log(error);
}
