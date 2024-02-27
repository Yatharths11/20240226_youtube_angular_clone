import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscriptionsComponent {
  cards =[
    {
      "thumbnailImage": "thumbnail1.jpg",
      "title": "MEAN Stack Basics",
      "channel": "DevMaster",
      "views": "2,345 views",
      "datePublished": "January 15, 2024",
      "subscribe": true
    },
    {
      "thumbnailImage": "thumbnail2.jpg",
      "title": "Responsive Web Design Tutorial",
      "channel": "WebWizard",
      "views": "5,678 views",
      "datePublished": "February 1, 2024",
      "subscribe": false
    },
    {
      "thumbnailImage": "thumbnail3.jpg",
      "title": "Node.js Crash Course",
      "channel": "NodeNinja",
      "views": "1,234 views",
      "datePublished": "March 10, 2024",
      "subscribe": true
    },
    {
      "thumbnailImage": "thumbnail4.jpg",
      "title": "CSS Flexbox Explained",
      "channel": "CSSMaestro",
      "views": "3,456 views",
      "datePublished": "April 5, 2024",
      "subscribe": false
    },
    {
      "thumbnailImage": "thumbnail5.jpg",
      "title": "MongoDB for Beginners",
      "channel": "DBExplorer",
      "views": "7,890 views",
      "datePublished": "May 20, 2024",
      "subscribe": true
    },
    {
      "thumbnailImage": "thumbnail17.jpg",
      "title": "GraphQL Basics Explained",
      "channel": "GraphQLGeek",
      "views": "6,789 views",
      "datePublished": "May 15, 2025",
      "subscribe": true
    },
    {
      "thumbnailImage": "thumbnail18.jpg",
      "title": "Python Flask Web Development",
      "channel": "FlaskFanatic",
      "views": "3,456 views",
      "datePublished": "June 5, 2025",
      "subscribe": false
    },
    {
      "thumbnailImage": "thumbnail6.jpg",
      "title": "JavaScript ES6 Features",
      "channel": "JSPro",
      "views": "4,567 views",
      "datePublished": "June 8, 2024",
      "subscribe": false
    },
    {
      "thumbnailImage": "thumbnail7.jpg",
      "title": "Angular Components Tutorial",
      "channel": "AngularGuru",
      "views": "1,234 views",
      "datePublished": "July 3, 2024",
      "subscribe": true
    },
    {
      "thumbnailImage": "thumbnail8.jpg",
      "title": "SASS for Stylish Stylesheets",
      "channel": "StylishCoder",
      "views": "6,789 views",
      "datePublished": "August 18, 2024",
      "subscribe": false
    },
    {
      "thumbnailImage": "thumbnail9.jpg",
      "title": "Express.js Routing Explained",
      "channel": "ExpressExplorer",
      "views": "2,345 views",
      "datePublished": "September 12, 2024",
      "subscribe": true
    },
    {
      "thumbnailImage": "thumbnail10.jpg",
      "title": "Bootstrap 5 Crash Course",
      "channel": "Bootstrapper",
      "views": "9,012 views",
      "datePublished": "October 5, 2024",
      "subscribe": false
    },
    {
      "thumbnailImage": "thumbnail11.jpg",
      "title": "Vue.js State Management",
      "channel": "VueVirtuoso",
      "views": "3,456 views",
      "datePublished": "November 22, 2024",
      "subscribe": true
    },
    {
      "thumbnailImage": "thumbnail12.jpg",
      "title": "CSS Grid Layout Tutorial",
      "channel": "GridGenius",
      "views": "1,234 views",
      "datePublished": "December 10, 2024",
      "subscribe": false
    },
    {
      "thumbnailImage": "thumbnail13.jpg",
      "title": "RESTful API Design Best Practices",
      "channel": "APIArchitect",
      "views": "5,678 views",
      "datePublished": "January 2, 2025",
      "subscribe": true
    },
    {
      "thumbnailImage": "thumbnail14.jpg",
      "title": "React Hooks in Action",
      "channel": "ReactRover",
      "views": "7,890 views",
      "datePublished": "February 14, 2025",
      "subscribe": false
    },
    {
      "thumbnailImage": "thumbnail15.jpg",
      "title": "Django ORM Deep Dive",
      "channel": "DjangoDreamer",
      "views": "2,345 views",
      "datePublished": "March 8, 2025",
      "subscribe": true
    },
    {
      "thumbnailImage": "thumbnail16.jpg",
      "title": "Responsive Email Design Tutorial",
      "channel": "EmailCraftsman",
      "views": "4,567 views",
      "datePublished": "April 25, 2025",
      "subscribe": false
    }
  ] 
  subscribes = this.cards.filter(card => card.subscribe === true)
}
