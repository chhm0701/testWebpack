/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-04-25 10:17:56
 * @version $Id$
 */

//ES Module 模块引入方式
import Header from './header.js'
import Sidebar from './sidebar.js'
import Content from './content.js'



var root = document.getElementById('root')

new Header()
new Sidebar()
new Content()

