# README Generator

## Description

I created this project for two reasons. First, I wanted to make a tool that would save me time on future projects - creating README files. This process usually requires several steps of tracking down a template, filling out relevant sections while deleting others, and tracking down my license on GitHub and pasting it below. By creating this tool, these steps are done for me and output into a professional-looking file. Secondly, I wanted to practice my understanding of Node.js and template literals. This is my first foray into node and it's been exciting seeing the simplicity and ease that this framework can provide. I never imagined creating a README file from my command line, but after seeing how relatively easy this process is, I'm considering more advanced possibilties offered by node.
I also appreciated learning more about template literals, as I've seen these in other code and understand them to be quite common. I now feel comfortable in utilizing these in future projects.

## Installation

This project can be forked from my GitHub repository here:
<https://github.com/ericlyn4s/README_generator>

## Usage

<image src="assets/Command_line_input.png" alt="Example of terminal input" width="450">

From your terminal/command line, navigate to the README genertor folder. From here, input 'node index.js' and you'll be lead through several questions regarding your project. It will ask for your project's title, a description, installation instructions, usage instructions, how others can contribute, testing recommendations, what license the project is covered under (with a list of possible licenses), you GitHub username and your email address. This will then generate a new file called "Generated_README.md". This will display a license badge depending on which license you selected previously. Each section will contain the information you input. Finally, the table of contents section will list each section and include a link to that given section within the README. The intent is to copy this file into your project.



<image src="assets/Example_output.png" alt="Example of README output" width="450">

For further assistance, an insturctional video can be viewed [here](/Instructional%20Video.webm).

## Credits

I had a tutor session with Mazen Abed on 1/2/2024.

## License

MIT License

Copyright (c) 2024 Eric Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
