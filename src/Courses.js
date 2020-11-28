import { Component } from 'react';
import Course from './Course'
import CreateCourses from './CreateCourse'
import axios from 'axios'
class Courses extends Component {

    state = {
        courseList: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/students')
            .then(res => {
                this.setState({ courseList: res.data })
            })
    }

    deleteCourse = (courseId) => {

        let clist = this.state.courseList.filter((course) => { return course.courseId !== courseId })
        this.setState({ courseList: clist });
    }

    addCourse = (courseId, courseName, fees) => {
        this.setState({ courseList: [...this.state.courseList, { courseId, courseName, fees }] })
    }


    render() {
        return <div>
            <CreateCourses addCourse={this.addCourse} />
            <div className="jumbotron">
                {this.state.courseList.map(course => (
                    <Course key={course.courseId} courseDetails={course} deleteCourse={this.deleteCourse} />
                ))}
            </div>

        </div>
    }

}

export default Courses;