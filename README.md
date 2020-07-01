# What is this?

A port of [Sundown](https://github.com/vmg/sundown) to JavaScript using
[Emscripten](https://github.com/kripken/emscripten).

## Huh?

Emscripten basically works like this:

1. [Clang](http://clang.llvm.org) compiles C and C++ code to [LLVM
   bitcode](http://llvm.org/releases/3.1/docs/BitCodeFormat.html).
2. A [custom
   compiler](https://github.com/kripken/emscripten/blob/master/src/compiler.js)
   hosted in [node.js](http://nodejs.org) compiles the bitcode to JavaScript.
3. Optionally, the [Closure
   Compiler](https://developers.google.com/closure/compiler/) is used to
   optimize the JavaScript. (This page omitted the optimization pass so that
   the code would be more readable.)

This makes it really easy to use C and C++ libraries on the web. It's even been
used to convert whole programs to JavaScript and web technologies, like
[DOOM](http://www.youtube.com/watch?v=WDUPZRQf7oc).

## Settings

You can pass an object with settings to `MarkdownRenderer()` see
https://github.com/chobie/php-sundown/blob/master/docs/ExtensionsAndRenderFlags.md
for the available flags and extensions.

# License

Sundown and Emscripten are covered by their own licenses. For everything else:

Copyright (c) 2012 Adam Roben adam@roben.org

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
