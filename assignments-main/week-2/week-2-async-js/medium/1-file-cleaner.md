## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs');

fs.readFile('a.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log("error found");
    return;
  }

  const content = data
    .split(/\s+/)
    .join(" ")
    .trim();

  fs.writeFile('a.txt', content, (err) => {
    if (err) {
      console.log("error occurred");
      return;
    }
    console.log("File cleaned successfully");
    console.log(content);
  });
});