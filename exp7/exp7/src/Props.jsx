import React from 'react'
import './Props.css';

export default function Props(props) {
  return (
    <>
    <div class="outer-div">
        <h2>Student Information</h2>
        <div class="inner1">
    <div>Name: {props.name1}</div>
    <div>Subject: {props.subject1}</div>
    <div>Marks: {props.marks1}</div>
        </div>
    <div class="inner2">
        <div>Name: {props.name2}</div>
    <div>Subject: {props.subject2}</div>
    <div>Marks: {props.marks2}</div>
    </div>
     <div class="inner3">
        <div>Name: {props.name3}</div>
    <div>Subject: {props.subject3}</div>
    <div>Marks: {props.marks3}</div>
    </div>
    </div>
    </>
  )
}