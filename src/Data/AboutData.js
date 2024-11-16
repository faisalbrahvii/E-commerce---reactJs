import m2 from '../assest/about/sec.jpeg'
import cl2 from '../assest/about/company.jpeg'; 
import adidas from '../assest/about/adidas.jpeg'; 
import gucci from '../assest/about/Gucci SVG & PNG Download.jpeg'; 
import outfitter from '../assest/about/Outfitters.jpeg'; 
import levi from '../assest/about/Graphis International Awards & Publications.jpeg'; 
export const companymembers = [
    { id: 1, name: 'JEREMY ', rollno: 'HR', image: m2 },
    { id: 2, name: 'SERVERY', rollno: 'Web Designer', image: m2 },
    { id: 3, name: 'HUSSAIN', rollno: 'Co-founder', image: m2 },
    { id: 4, name: 'FAISAL', rollno: 'Leader', image: m2 },
]
export const companylogo = [
    { id: 1, name: 'JEREMY ', rollno: 'HR', image: cl2 },
    { id: 1, name: 'JEREMY ', rollno: 'HR', image: adidas },
    { id: 1, name: 'JEREMY ', rollno: 'HR', image: gucci },
    { id: 1, name: 'JEREMY ', rollno: 'HR', image: outfitter },
    { id: 1, name: 'JEREMY ', rollno: 'HR', image: levi },
]

// <section className={`transition-all duration-500 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg shadow-md mb-4">
//           <div>
//             <h3 className="font-semibold text-base mb-2">Sort By</h3>
//             <ul className="space-y-1 text-gray-600">
//               <li className="hover:text-gray-900 cursor-pointer">Default</li>
//               <li className="hover:text-gray-900 cursor-pointer">Popularity</li>
//               <li className="hover:text-gray-900 cursor-pointer">Average Rating</li>
//               <li className="hover:text-gray-900 cursor-pointer">Newness</li>
//               <li className="hover:text-gray-900 cursor-pointer">Price: Low to High</li>
//               <li className="hover:text-gray-900 cursor-pointer">Price: High to Low</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-base mb-2">Price</h3>
//             <ul className="space-y-1 text-gray-600">
//               <li className="hover:text-gray-900 cursor-pointer">All</li>
//               <li className="hover:text-gray-900 cursor-pointer">$0.00 - $50.00</li>
//               <li className="hover:text-gray-900 cursor-pointer">$50.00 - $100.00</li>
//               <li className="hover:text-gray-900 cursor-pointer">$100.00 - $150.00</li>
//               <li className="hover:text-gray-900 cursor-pointer">$150.00 - $200.00</li>
//               <li className="hover:text-gray-900 cursor-pointer">$200.00+</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-base mb-2">Color</h3>
//             <ul className="space-y-1 text-gray-600">
//               {['Black', 'Blue', 'Grey', 'Green', 'Red', 'White'].map((color, index) => (
//                 <li key={index} className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
//                   <span className={`w-3 h-3 rounded-full ${color.toLowerCase() === 'white' ? 'border' : `bg-${color.toLowerCase()}`}`} />
//                   <span>{color}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-base mb-2">Tags</h3>
//             <div className="flex flex-wrap gap-2">
//               {['Fashion', 'Lifestyle', 'Denim', 'Streetstyle', 'Crafts'].map(tag => (
//                 <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-gray-600 cursor-pointer hover:bg-gray-300 text-xs sm:text-sm">{tag}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>