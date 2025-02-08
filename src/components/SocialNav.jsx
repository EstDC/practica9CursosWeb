import React from "react";
import '../styles/global.css';

const SocialNav = () => (
<div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-12 font-oswald z-20">
  <a href="#" className="flex flex-col items-center space-y-11">
    <span className="text-white hover:text-red-500 text-sm uppercase tracking-widest -rotate-90 origin-center">Instagram</span>
    <img src="/img/instagram.png" className="w-9 h-9 -rotate-90" alt="Instagram"/>
  </a>
  <a href="#" className="flex flex-col items-center space-y-10">
    <span className="text-white hover:text-red-500 text-sm uppercase tracking-widest -rotate-90 origin-center">Facebook</span>
    <img src="/img/facebook.png" className="w-9 h-9 -rotate-90" alt="Facebook"/>
  </a>
  <a href="#" className="flex flex-col items-center space-y-7">
    <span className="text-white hover:text-red-500 text-sm uppercase tracking-widest -rotate-90 origin-center">Twitter</span>
    <img src="/img/twitter.png" className="w-9 h-9 -rotate-90" alt="Twitter"/>
  </a>
</div>

);

export default SocialNav;