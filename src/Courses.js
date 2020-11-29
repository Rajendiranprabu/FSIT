import { Component } from 'react';
import Course from './Course'
import CreateCourses from './CreateCourse'
import { connect } from 'react-redux'
import { getCourses } from './actions/courseAction'
class Courses extends Component {


    componentDidMount() {

        this.props.getCourses();

    }

    componentDidUpdate() {
        console.log(this.props.courseList)

    }

    deleteCourse = (courseId) => {

        let clist = this.props.courseList.filter((course) => { return course.courseId !== courseId })
        this.setState({ courseList: clist });
    }

    addCourse = (courseId, courseName, fees) => {
        this.setState({ courseList: [...this.props.courseList, { courseId, courseName, fees }] })
    }


    render() {
        let loading = true;

        if (this.props.courseList !== null) {
            loading = false;
        }
        return loading ? <h1> loading</h1> :
            <div>
                <CreateCourses addCourse={this.addCourse} />
                <div className="jumbotron">
                    {this.props.courseList.map(course => (
                        <Course key={course.courseId} courseDetails={course} deleteCourse={this.deleteCourse} />
                    ))}
                </div>
                }
        
        </div>
    }

}

const mapStatetoProps = state => (
    { courseList: state.course.courseList }

)

export default connect(mapStatetoProps, { getCourses })(Courses);