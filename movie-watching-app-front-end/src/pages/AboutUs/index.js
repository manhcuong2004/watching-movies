import styles from './styles.module.css';
import Nav from '../../components/components/Nav';
import clsx from 'clsx'

function AboutUs(){
    return (
        <div className={styles.aboutUs}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.first}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h2>Why choose us</h2>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laqua. Ut enim ad minim veniam, quis</p>
                            <p>Lorem ipsut amet, consectetur adipisicing elit, sed do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis</p>
                        </div>
                        <div className={styles.imgBox}>
                            <img src='https://streamo.vuejstemplate.com/images/about/01.jpg'/>
                        </div>
                    </div>
                    <div className={clsx(styles.box, styles.about)}>
                        <div>
                            <h3>Our Mission</h3>
                            <p>Lorem ipsut amet, consectetur adipisicing elit, sed do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non proident, sununt .</p>
                            <ul>
                                <li>
                                    <i class="zmdi zmdi-check"></i>
                                    Mod tempor incididunt ut laqua.
                                </li>
                                <li>
                                    <i class="zmdi zmdi-check"></i>
                                    Mod tempor incididunt ut laqua.
                                </li>
                                <li>
                                    <i class="zmdi zmdi-check"></i>
                                    Mod tempor incididunt ut laqua.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Our Objective</h3>
                            <p>Lorem ipsut amet, consectetur adipisicing elit, sed do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non proident, sununt .</p>
                            <p>reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        <div>
                            <h3>Our Achievement</h3>
                            <p>Lorem ipsut amet, consectetur adipisicing elit, sed do irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oecat cupidatat non proident, sununt .</p>
                            <p>reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                        </div>
                        
                    </div>
                </div>
                <div className={(clsx(styles.second, styles.same))}>
                    <div className={styles.content}>
                        <h2>Why Choose Us</h2>
                        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laqua. Ut enim ad minim veniam, quis</p>
                    </div>
                    <div className={styles.imgBox}>
                        <img src="https://streamo.vuejstemplate.com/images/other/mokup-06.png"/>
                        <span>
                            <i class="zmdi zmdi-play"></i>
                        </span>
                    </div>
                </div>
                <div className={styles.third}>
                    <div className={styles.box}>
                        <img src='https://streamo.vuejstemplate.com/images/icon/cout-01.png'/>
                        <h3>240</h3>
                        <p>Satisfied Customer</p>
                    </div>
                    <div className={styles.box}>
                        <img src='https://streamo.vuejstemplate.com/images/icon/cout-01.png'/>
                        <h3>240</h3>
                        <p>Satisfied Customer</p>
                    </div>
                    <div className={styles.box}>
                        <img src='https://streamo.vuejstemplate.com/images/icon/cout-01.png'/>
                        <h3>240</h3>
                        <p>Satisfied Customer</p>
                    </div>
                    <div className={styles.box}>
                        <img src='https://streamo.vuejstemplate.com/images/icon/cout-01.png'/>
                        <h3>240</h3>
                        <p>Satisfied Customer</p>
                    </div>
                </div>
                <div className={(clsx(styles.four, styles.same))}>
                    <div className={styles.content}>
                        <h2>Best Team</h2>
                        <p>Adminim veniam, quis nostrud exercitation ullamco laboris nisi ut pariatur. Excepteur t labore et dolore magnam aliquam quaerat</p>
                    </div>
                    <div className={styles.person}>
                        <div className ={styles.box}>
                            <div className={styles.imgBox}>
                                <img src ='https://streamo.vuejstemplate.com/images/team/team-01.png'/>
                                {/* <ul>
                                    <li><i class="zmdi zmdi-facebook"></i></li>
                                    <li><i class="zmdi zmdi-twitter"></i></li>
                                    <li><i class="zmdi zmdi-linkedin"></i></li>
                                    <li><i class="zmdi zmdi-instagram"></i></li>
                                </ul> */}
                            </div>
                            <div className={styles.content}>
                                <h4>Reza Karim</h4>
                                <p>Programer</p>
                            </div>
                        </div>
                        {/* <div className ={styles.box}>
                            <div className={styles.imgBox}>
                                <img src ='https://streamo.vuejstemplate.com/images/team/team-01.png'/>
                                <ul>
                                    <li><i class="zmdi zmdi-facebook"></i></li>
                                    <li><i class="zmdi zmdi-twitter"></i></li>
                                    <li><i class="zmdi zmdi-linkedin"></i></li>
                                    <li><i class="zmdi zmdi-instagram"></i></li>
                                </ul>
                            </div>
                            <div className={styles.content}>
                                <h4>Reza Karim</h4>
                                <p>Programer</p>
                            </div>
                        </div>
                        <div className ={styles.box}>
                            <div className={styles.imgBox}>
                                <img src ='https://streamo.vuejstemplate.com/images/team/team-01.png'/>
                                <ul>
                                    <li><i class="zmdi zmdi-facebook"></i></li>
                                    <li><i class="zmdi zmdi-twitter"></i></li>
                                    <li><i class="zmdi zmdi-linkedin"></i></li>
                                    <li><i class="zmdi zmdi-instagram"></i></li>
                                </ul>
                            </div>
                            <div className={styles.content}>
                                <h4>Reza Karim</h4>
                                <p>Programer</p>
                            </div>
                        </div>
                        <div className ={styles.box}>
                            <div className={styles.imgBox}>
                                <img src ='https://streamo.vuejstemplate.com/images/team/team-01.png'/>
                                <ul>
                                    <li><i class="zmdi zmdi-facebook"></i></li>
                                    <li><i class="zmdi zmdi-twitter"></i></li>
                                    <li><i class="zmdi zmdi-linkedin"></i></li>
                                    <li><i class="zmdi zmdi-instagram"></i></li>
                                </ul>
                            </div>
                            <div className={styles.content}>
                                <h4>Reza Karim</h4>
                                <p>Programer</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs

// {/* <div class="text-center">
//     <div class="text-center group">
//         <div class="relative group-hover:bg-[#ffda84] transition-all pt-[10px]">
//             <img src="/images/team/team-01.png" alt="Team"> 
//             <ul class="absolute -bottom-5 left-1/2 transition-all duration-500 transform -translate-x-1/2 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible">
//                 <li class="mx-[4px]"><a href="https://www.facebook.com/" class="block bg-[#ffc61b] text-white h-[40px] w-[40px] leading-[40px] text-center rounded-full group-hover:animate-roll"><i class="zmdi zmdi-facebook"></i></a></li>
//                 <li class="mx-[4px]"><a href="https://twitter.com/" class="block bg-[#ffc61b] text-white h-[40px] w-[40px] leading-[40px] text-center rounded-full group-hover:animate-roll"><i class="zmdi zmdi-twitter"></i></a></li><li class="mx-[4px]"><a href="https://www.linkedin.com/" class="block bg-[#ffc61b] text-white h-[40px] w-[40px] leading-[40px] text-center rounded-full group-hover:animate-roll"><i class="zmdi zmdi-linkedin"></i></a></li>
//                 <li class="mx-[4px]"><a href="https://www.instagram.com/" class="block bg-[#ffc61b] text-white h-[40px] w-[40px] leading-[40px] text-center rounded-full group-hover:animate-roll"><i class="zmdi zmdi-instagram"></i></a></li>
//             </ul>
//         </div>
    //      <div class="mt-6">
    //         <h4 class="text-[18px] font-semibold text-white">Reza Karim</h4> 
    //         <span class="text-[16px] font-normal block mt-1 text-white">Programer</span>
    //     </div>
//      </div> */}
