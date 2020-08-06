import React from 'react';

const InfoHead = () => {
    return (
        <div className="info-head">
            <div class="ui card">
                <div class="content">
                    <div class="header"> <i class="calendar alternate icon"></i>Academic Timetable</div>
                    <div class="meta">2 days ago</div>
                    <div class="description">
                        <p>As Western University continues to respond to the changing circumstances surrounding the COVID-19 pandemic, the Fall/Winter 2020-2021 course offerings may be subject to change. As you plan your course selections, we encourage you to review the Academic Timetable regularly.</p>
                    </div>
                </div>
                <div class="extra content">
                    <i class="linkify icon"></i>
                         Western's COVID-19 website
                </div>
            </div>

            <div class="ui card">
                <div class="content">
                    <div class="header"><i class="bullhorn icon"></i>COVID-19</div>
                    <div class="meta"> Due to uncertainty around COVID-19, students must have a reliable internet connection and computer that are compatible with online learning and testing system requirements. Some courses may also require the use of a remote proctoring platform (such as Proctortrack) to ensure tests are taken fairly in accordance with Western's policy on Scholastic Discipline for Undergraduate Students and Scholastic Discipline for Graduate Students.</div>
                    <div class="description">
                        <p>Computer requirements include:
                            <ul>
                                <li> Operating system: MAC: OSX Yosemite 10.10.5 or higher, PC: Windows 7, 8, or higher </li>
                                <li> Processor/Ram: MAC: Intel / AMD Processor, 2 GB RAM, PC: Dual-core 2.4 Ghz CPU, 2 GB RAM or better </li>
                                <li> Web Browsers: Mozilla Firefox v20.0 or Higher Google Chrome v25.0 or higher </li>
                                <li> Plug-ins: Javascript Enabled & Third Party Cookies Enabled </li>
                                <li> Camera resolution: 800 x 600 resolution or better </li>
                                <li> CInternet connection: Cable Modem, DSL or better (300 kbps download, 250 kbps upload </li>
                            </ul>

                        </p>
                    </div>
                </div>
                <div class="extra content">
                    <i class="linkify icon"></i>
                    COVID-19 (Coronavirus)
                 </div>
            </div>

            <div class="ui card">
                <div class="content">
                    <div class="header"><i class="book icon"></i>Course Syllabus</div>
                    <div class="meta">2 days ago</div>
                    <div class="description">
                        <p>Please refer to the course syllabus and Western's remote proctoring website for further information.</p>
                    </div>
                </div>
                <div class="extra content">
                    <i class="linkify icon"></i>
                    Western's remote proctoring website 
                </div>
            </div>
        </div>
    );
};

export default InfoHead;