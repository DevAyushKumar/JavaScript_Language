//charAt()
"Hello".charAt(0);
"Hello".charAt(10);
"Hello".charAt(-1);

//at()
"Hello".at(0);
"Hello".at(-1);
"Hello".at(-2);
"Hello".at(10);

//indexOf
"Hello".indexOf("o");
"Hello".indexOf("o",5);
"Hello".indexOf("xyz");
"Hello".indexOf("");

//LastIndexOf
"file.name.txt".lastIndexOf(".txt");
"Hello World".lastIndexOf("o");
"Hello world".lastIndexOf("o", 6);

//includes
"Hello world".includes("Hello");
"Hello world".includes("world");
"Hello world".includes("o", 5);

//startsWith
"https://example.com".startsWith("https://");
"image.png".startsWith("image");
"Hello".startsWith("ello",1);

//endsWith
"image.png".endsWith(".png");
"image.png".endsWith(".jpeg");
"photo.png".endsWith("photo",5);

//slice
"Hello world".slice(0,5);
"Hello world".slice(6);
"Hello world".slice(-5);
"Hello world".slice(-5, -1);
"Hello world".slice(6,2);

//substring
"Hello world".substring(0,5);
"Hello world".substring(-3,5);
"Hello world".substring(5, 0);

//split
"a,b,c".split(",");
"Hello world".split(" ");
"1abc123".split(/\d/);
"no-seperator".split("x");

//replace
"Hello world".replace("w", "W");
"Hello world".replace(/o/g, "O");
"2026-04-6".replace(/-/g,"/");
"hello world".replace(/\w+/g, w => w.charAt(0).toUpperCase() + w.slice(1));