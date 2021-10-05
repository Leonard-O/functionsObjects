import React from 'react'


function About() {


    const school = {
        sName: 'Township',
        pupils: 'young',
        graduated: true,
        classes: 'concrete',
        noOfPupils: '5,000',
        noOfTeachers: 70,
        noOfClasses: 20,

        about: function(){
            return `This is ${this.sName} primary has ${this.noOfPupils} pupils. The classes are ${this.classes} the total number of classes is ${this.noOfClasses} and ${this.noOfTeachers} teachers ${this.graduated}`
        }
    }

let hello = () => {
    return 'Hello world'
}

    return (
        <div>
            <h2>This is the HEADER</h2>
            <button>Click Me</button>
            <p>{school.about()}</p>
            <p>{hello()}</p>
        </div>
    )
}

export default About
