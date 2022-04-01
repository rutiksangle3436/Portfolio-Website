import React from 'react';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';


export default function Footer1() {
    return (
        <div classname="bg-silver_pre text-gold_pre">
            <Footer className="footer bg-silver_pre text-gold_pre"
                backgroundColor="#F6F6F6"
                theme="light"
                // columns={[
                //     {
                //         items: [
                //             {
                //                 title: 'Become an Author',
                //                 url:"#/row1"
                //             },
                //             {
                //                 title: 'Get the App'
                //             }
                //             ,
                //             {
                //                 title: 'Contact Us'
                //             }
                //         ]
                //     },
                //     {
                //         items: [
                //             {
                //                 title: 'Careers',
                //                 url:"#/row1"
                //             },
                //             {
                //                 title: 'Blogs'
                //             }
                //             ,
                //             {
                //                 title: 'Privacy Policy'
                //             }
                //         ]
                        
                //     },
                //     {
                //         items: [
                //             {
                //                 title:'Facebook',
                //                 url:"#/row1"
                //             },
                //             {
                //                 title: 'Instagram'
                //             }
                //             ,
                //             {
                //                 title: 'Youtube'
                //             }
                //         ]
                        
                //     },
                //     {
                //         items: [
                //             {
                //                 title: 'Terms',
                //                 url:"#/row1"
                //             },
                //             {
                //                 title: 'Help and Support'
                //             }
                //             ,
                //             {
                //                 title: 'Responsible Disclosure'
                //             }
                //         ]
                        
                //     }
                // ]}
                bottom="Made with ❤️ by Rutik Sangle!"
            />
        </div>
    );
}