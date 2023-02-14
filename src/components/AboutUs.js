const AboutUs = () => {
    return ( 
        <div className="w-full h-2/5 relative">
        <div className="rounded ... p-5 w-full content-center
         bg-stone-900 flex justify-evenly">
            <a href="https://www.instagram.com/solutareas/?next=%2F">
            <div className="flex justify-start">
            <svg class="h-6 w-6 text-gray-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            <h2 className="pl-5 text-white">@solutareas</h2>
            </div>
            </a>
          
            <a href="https://api.whatsapp.com/send/?phone=3134211400">
            <div className="flex justify-start">
            <svg class="h-6 w-6 text-gray-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />  <line x1="12" y1="18" x2="12.01" y2="18" /></svg>
            <h2 className="pl-5 text-white">+57 313421 1400</h2>
            </div>
            </a>

            <div className="flex justify-start">
            <svg class="h-6 w-6 text-gray-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            <h2 className="pl-5 text-white">solutareas</h2>
            </div>
        </div>
    </div> 
     );
}
 
export default AboutUs;