import './App.css';
import Service from './Service';
import Header from './Header';

function App() {


  const servicaData=[
    {
      title:"C",
      subtitle:"Designed by Dennis Ritchie",
      desc:"A successor to the programming language B, C was originally developed at Bell Labs by Dennis Ritchie between 1972 and 1973 to construct utilities running on Unix. It was applied to re-implementing the kernel of the Unix operating system. During the 1980s, C gradually gained popularity. It has become one of the most widely used programming languages, with C compilers from various vendors available for the majority of existing computer architectures and operating systems.",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png"
    },
    {
      title:"C++",
      subtitle:"Developed by  ISO/IEC JTC1 (Joint Technical Committee 1) / SC22 (Subcommittee 22) / WG21 (Working Group 21)",
      desc:"C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes.",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
    },
    {
      title:"Python",
      subtitle:"Developed by Python Software Foundation",
      desc:"Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
    },
    {
      title:"MATLAB",
      subtitle:"Developed by MathWorks",
      desc:"MATLAB is a proprietary multi-paradigm programming language and numeric computing environment developed by MathWorks. MATLAB allows matrix manipulations, plotting of functions and data, implementation of algorithms, creation of user interfaces, and interfacing with programs written in other languages. ",
      img:"https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
    },
    {
      title:"JavaScript",
      subtitle:"Designed by Brendan Eich of Netscape",
      desc:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
      img:"https://www.ocpsoft.org/wp-content/uploads/2013/01/javascript_logo_unofficial.png"
    },
    {
      title:"Java",
      subtitle:"Developed by Oracle Corporation",
      desc:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      img:"https://icon-library.com/images/java-icon-png/java-icon-png-16.jpg"
    }
    
  ]


  return (
    <>
    <Header/>
    <div className="container">
        

            {
              servicaData.map((data,label)=>(
                <Service key={label} title={data.title} subtitle={data.subtitle} img={data.img} desc={data.desc} />
              ))
            }
         
          
      </div>
      </>
  );
}

export default App;