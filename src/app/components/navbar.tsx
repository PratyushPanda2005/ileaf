"use client";
import React, { useState, useEffect, MouseEvent, useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import Logo from "../../../public/assets/logos/logo-i-LEAF-logo.svg";
import Image from "next/image";
import Link from "next/link";
import Parallelogram from "./parallelogram";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useTransitionRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Location selection states
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href;
  };
  const leftRoutes = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/aboutus" },
    { label: "Products", url: "/products" },
    { label: "Features", url: "/features" },
  ];

  const rightRoutes = [
    { label: "Gallery", url: "/gallery" },
    { label: "Testimonial", url: "/testimonial" },
    { label: "Contact", url: "/contact" },
  ];

 
  const locationData = {
    india: {
      states : {
        // States (28)
        'andhra-pradesh': {
          name: 'Andhra Pradesh',
          cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Kadapa', 'Anantapur', 'Eluru']
        },
        'arunachal-pradesh': {
          name: 'Arunachal Pradesh',
          cities: ['Itanagar', 'Tawang', 'Ziro', 'Bomdila', 'Naharlagun', 'Pasighat', 'Tezu', 'Aalo', 'Changlang', 'Khonsa']
        },
        'assam': {
          name: 'Assam',
          cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Nagaon', 'Tinsukia', 'Bongaigaon', 'Karimganj', 'Goalpara']
        },
        'bihar': {
          name: 'Bihar',
          cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar']
        },
        'chhattisgarh': {
          name: 'Chhattisgarh',
          cities: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh', 'Ambikapur', 'Mahasamund']
        },
        'goa': {
          name: 'Goa',
          cities: ['Panaji', 'Vasco da Gama', 'Margao', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Sanquelim', 'Valpoi', 'Quepem']
        },
        'gujarat': {
          name: 'Gujarat',
          cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Anand', 'Morbi', 'Navsari']
        },
        'haryana': {
          name: 'Haryana',
          cities: ['Gurgaon', 'Faridabad', 'Panipat', 'Ambala', 'Hisar', 'Karnal', 'Sonipat', 'Yamunanagar', 'Rohtak', 'Kurukshetra']
        },
        'himachal-pradesh': {
          name: 'Himachal Pradesh',
          cities: ['Shimla', 'Dharamshala', 'Solan', 'Mandi', 'Palampur', 'Baddi', 'Kullu', 'Hamirpur', 'Bilaspur', 'Chamba']
        },
        'jharkhand': {
          name: 'Jharkhand',
          cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Phusro', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Medininagar']
        },
        'karnataka': {
          name: 'Karnataka',
          cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davanagere', 'Bellary', 'Bijapur', 'Shimoga']
        },
        'kerala': {
          name: 'Kerala',
          cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Alappuzha', 'Palakkad', 'Kannur', 'Kottayam', 'Malappuram']
        },
        'madhya-pradesh': {
          name: 'Madhya Pradesh',
          cities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa']
        },
        'maharashtra': {
          name: 'Maharashtra',
          cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Thane', 'Kolhapur', 'Sangli', 'Malegaon']
        },
        'manipur': {
          name: 'Manipur',
          cities: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Kakching', 'Ukhrul', 'Senapati', 'Tamenglong', 'Jiribam', 'Pherzawl']
        },
        'meghalaya': {
          name: 'Meghalaya',
          cities: ['Shillong', 'Tura', 'Cherrapunji', 'Jowai', 'Nongstoin', 'Baghmara', 'Williamnagar', 'Resubelpara', 'Ampati', 'Mawkyrwat']
        },
        'mizoram': {
          name: 'Mizoram',
          cities: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai', 'Mamit', 'Bairabi', 'Vairengte']
        },
        'nagaland': {
          name: 'Nagaland',
          cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Kiphire', 'Longleng', 'Peren']
        },
        'odisha': {
          name: 'Odisha',
          cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Baripada', 'Jeypore']
        },
        'punjab': {
          name: 'Punjab',
          cities: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Batala', 'Pathankot', 'Moga']
        },
        'rajasthan': {
          name: 'Rajasthan',
          cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner', 'Ajmer', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar']
        },
        'sikkim': {
          name: 'Sikkim',
          cities: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Jorethang', 'Rangpo', 'Singtam', 'Pakyong', 'Ravangla', 'Yuksom']
        },
        'tamil-nadu': {
          name: 'Tamil Nadu',
          cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tirupur', 'Vellore', 'Erode', 'Thoothukudi']
        },
        'telangana': {
          name: 'Telangana',
          cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Suryapet', 'Siddipet']
        },
        'tripura': {
          name: 'Tripura',
          cities: ['Agartala', 'Dharmanagar', 'Udaipur', 'Kailasahar', 'Belonia', 'Khowai', 'Ambassa', 'Teliamura', 'Sabroom', 'Kumarghat']
        },
        'uttar-pradesh': {
          name: 'Uttar Pradesh',
          cities: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur']
        },
        'uttarakhand': {
          name: 'Uttarakhand',
          cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Kotdwar', 'Pithoragarh', 'Almora']
        },
        'west-bengal': {
          name: 'West Bengal',
          cities: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Malda', 'Bardhaman', 'Kharagpur', 'Haldia', 'Krishnanagar']
        },
      
        // Union Territories (8)
        'andaman-nicobar': {
          name: 'Andaman and Nicobar Islands',
          cities: ['Port Blair', 'Bamboo Flat', 'Garacharma', 'Diglipur', 'Baratang', 'Rangat', 'Mayabunder', 'Campbell Bay', 'Car Nicobar', 'Hut Bay']
        },
        'chandigarh': {
          name: 'Chandigarh',
          cities: ['Chandigarh', 'Sector 17', 'Sector 22', 'Sector 35', 'Mani Majra', 'Sector 15', 'Sector 34', 'Sector 37', 'Sector 43', 'Sector 46']
        },
        'dadra-nagar-haveli-daman-diu': {
          name: 'Dadra and Nagar Haveli and Daman and Diu',
          cities: ['Daman', 'Diu', 'Silvassa', 'Vapi', 'Dadra', 'Nagar Haveli', 'Moti Daman', 'Nani Daman', 'Khanvel', 'Samarvarni']
        },
        'delhi': {
          name: 'Delhi',
          cities: ['New Delhi', 'Old Delhi', 'Dwarka', 'Rohini', 'Lajpat Nagar', 'Karol Bagh', 'Connaught Place', 'Janakpuri', 'Pitampura', 'Vasant Kunj']
        },
        'jammu-kashmir': {
          name: 'Jammu and Kashmir',
          cities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Sopore', 'Kathua', 'Udhampur', 'Punch', 'Rajouri', 'Kupwara']
        },
        'ladakh': {
          name: 'Ladakh',
          cities: ['Leh', 'Kargil', 'Diskit', 'Nyoma', 'Dras', 'Sankoo', 'Khalsi', 'Batalik', 'Turtuk', 'Nubra']
        },
        'lakshadweep': {
          name: 'Lakshadweep',
          cities: ['Kavaratti', 'Agatti', 'Minicoy', 'Amini', 'Andrott', 'Kalpeni', 'Kadmat', 'Kiltan', 'Chetlat', 'Bitra']
        },
        'puducherry': {
          name: 'Puducherry',
          cities: ['Puducherry', 'Karaikal', 'Mahe', 'Yanam', 'Villianur', 'Ariyankuppam', 'Bahour', 'Nettapakkam', 'Mannadipet', 'Ozhukarai']
        }
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState(''); // Reset state when country changes
    setSelectedCity(''); // Reset city when country changes
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity(''); // Reset city when state changes
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const getStates = () => {
    if (!selectedCountry || !locationData[selectedCountry as keyof typeof locationData]) return [];
    return Object.entries(locationData[selectedCountry as keyof typeof locationData].states).map(([key, value]) => ({
      key,
      name: value.name
    }));
  };

  const getCities = () => {
    if (!selectedCountry || !selectedState || !locationData[selectedCountry as keyof typeof locationData]?.states[selectedState as keyof typeof locationData.india.states]) return [];
    return locationData[selectedCountry as keyof typeof locationData].states[selectedState as keyof typeof locationData.india.states].cities;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
        setVisible(!isScrollingDown || currentScrollPos < 10);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener
      );
    };
  }, [isDropdownOpen]);

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    router.push(url, {
      onTransitionReady: pageAnimation,
    });
  };

  return (
    <>
      {/* Mobile Nav */}
      <div
        className={`lg:hidden relative top-0 left-0 right-0 z-50 bg-[#5e636b]/70 p-4 flex justify-center items-center transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-[2em] w-fit">
          <Link href="/" onClick={(e) => handleNavigation(e, "/")}>
            <Image src={Logo} alt="i-LEAF Logo" className="w-full h-[2em]" />
          </Link>
        </div>
      </div>

      <button
        onClick={toggleMenu}
        className="text-yellow-400 fixed lg:hidden focus:outline-none  top-20 right-4 z-[60]"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed lg:hidden top-0 left-0 min-h-screen w-full bg-black z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden pt-4`}
      >
        <ul className="flex flex-col gap-4 uppercase text-sm italic p-6 text-[#FFBF00] text-center">
          {leftRoutes.map((route) => (
            <li key={route.label}>
              <Link
                href={route.url}
                onClick={(e) => {
                  handleNavigation(e, route.url);
                  setIsMenuOpen(false);
                }}
                className="hover:text-amber-300 transition-all duration-300"
              >
                {route.label}
              </Link>
            </li>
          ))}
          {rightRoutes.map((route) => (
            <li key={route.label}>
              <Link
                href={route.url}
                onClick={(e) => {
                  handleNavigation(e, route.url);
                  setIsMenuOpen(false);
                }}
                className="hover:text-amber-300 transition-all duration-300"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center">
          <div className=" w-4 h-2 bg-amber-300 transform skew-x-[-200deg]" />
        </div>
        <ul className="flex flex-col gap-2 uppercase text-sm italic p-6 text-[#FFBF00] text-center">
          <li className="pb-2">
            <Link onClick={() => setIsMenuOpen(false)} href="/product-category/luxury" >Luxury Doors</Link>
          </li>
          <li className="pb-2"><Link onClick={() => setIsMenuOpen(false)} href="/product-category/gidoors" >Gi Doors</Link></li>
          <li className="pb-2"><Link onClick={() => setIsMenuOpen(false)} href="/product-category/gldoors" >GL Doors</Link></li>
          <li className="pb-2"><Link onClick={() => setIsMenuOpen(false)} href="/product-category/windows" >windows</Link></li>
          <li className="pb-2"><Link onClick={() => setIsMenuOpen(false)} href="/product-category/fibredoors" >Fibre doors</Link></li>
          <li className="pb-2"><Link onClick={() => setIsMenuOpen(false)} href="/product-category/wpcdoors" >wpc Doors</Link></li>
        </ul>
        <div className="flex-1 flex flex-col gap-10 justify-center items-center">
          <button className="uppercase p-3 px-6 lg:p-4 lg:px-8 transform -skew-x-12 text-sm lg:text-base border border-[#707070] text-amber-400">
            download brochure
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav
        className={`hidden lg:flex fixed z-[50] justify-between items-center w-full py-6 px-12 lg:px-20 bg-[#5e636b]/90 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mt-7">
          <ul className="flex lg:gap-6 xl:gap-10 uppercase text-xs font-raleway font-[500] tracking-[0.1em]">
            {leftRoutes.map((route) => (
              <li key={route.label}>
                <Link
                  href={route.url}

                  onClick={(e) => handleNavigation(e, route.url)}
                  className={`hover:text-amber-300 transition-all duration-300  ${
                    isActive(route.url) ? "text-amber-300" : "text-black"
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link href="/" onClick={(e) => handleNavigation(e, "/")}>
            <Image src={Logo} alt="i-LEAF Logo" className="h-[3em] w-fit" />
          </Link>
        </div>

        <div className="mt-7">
          <ul className="flex lg:gap-6 xl:gap-10 uppercase text-xs font-raleway font-[500] tracking-[0.1em]">
            {rightRoutes.slice(0,2).map((route) => (
              <li key={route.label}>
                <Link
                  href={route.url}
                  onClick={(e) => handleNavigation(e, route.url)}
                  className={`hover:text-amber-300 transition-all duration-300  ${
                    isActive(route.url) ? "text-amber-300" : "text-black"
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <li className="relative">
              <span
                onClick={toggleDropdown}
                className="cursor-pointer hover:text-amber-300"
              >
                Enquiry
              </span>
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-6 bg-white text-black shadow-lg z-50 w-[380px] h-[520px] overflow-y-auto"
                >
                  <div className="flex flex-col items-center justify-start gap-6 w-full p-8">
                    <div className="text-center">
                      <h1 className="text-base font-raleway text-amber-400 font-bold">
                        Enquiry Form
                      </h1>
                      <Parallelogram />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <div className="relative">
                        <input
                          type="text"
                          id="floating_outlined1"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-amber-300 appearance-none  focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="floating_outlined1"
                          className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-amber-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 normal-case"
                        >
                          Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="floating_outlined2"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-amber-300 appearance-none  focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="floating_outlined2"
                          className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-amber-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 normal-case"
                        >
                          Email
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="number"
                          id="floating_outlined3"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-amber-300 appearance-none  focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="floating_outlined3"
                          className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-amber-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 normal-case"
                        >
                          Mobile No.
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="floating_outlined4"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 border-amber-300 appearance-none  focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="floating_outlined4"
                          className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-amber-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 normal-case"
                        >
                          Whatsapp No.
                        </label>
                      </div>
                      
                      {/* Country Dropdown */}
                      <select
                        id="country"
                        name="country"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        className="p-2 border border-amber-300 text-base font-[300] focus:outline-none focus:ring-0 focus:border-amber-600"
                      >
                        <option value="">Select Country</option>
                        <option value="india">India</option>
                      </select>

                      {/* State Dropdown */}
                      <select
                        id="state"
                        name="state"
                        value={selectedState}
                        onChange={handleStateChange}
                        disabled={!selectedCountry}
                        className="p-2 border border-amber-300 text-base font-[300] focus:outline-none focus:ring-0 focus:border-amber-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="">Select State</option>
                        {selectedCountry && getStates().map((state) => (
                          <option key={state.key} value={state.key}>
                            {state.name}
                          </option>
                        ))}
                      </select>

                      {/* City Dropdown */}
                      <select
                        id="city"
                        name="city"
                        value={selectedCity}
                        onChange={handleCityChange}
                        disabled={!selectedState}
                        className="p-2 border border-amber-300 text-base font-[300] focus:outline-none focus:ring-0 focus:border-amber-600 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="">Select City</option>
                        {selectedState && getCities().map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>

                      <select
                        id="source"
                        name="source"
                        className="p-2 border border-amber-300 text-base font-[300]"
                      >
                        <option value="">How did you find us?</option>
                        <option value="google">Google</option>
                        <option value="facebook">Facebook</option>
                        <option value="instagram">Instagram</option>
                        <option value="friend">Friend/Family</option>
                        <option value="other">Other</option>
                      </select>
                      <h2 className="normal-case text-base font-[300] mt-2">
                        Select a product
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex gap-1 text-base font-[300] normal-case">
                          <input
                            type="checkbox"
                            id="luxury-doors"
                            name="product"
                            value="luxury-doors"
                          />
                          <label htmlFor="luxury-doors">Luxury Doors</label>
                        </div>
                        <div className="flex gap-1 text-base font-[300] normal-case">
                          <input
                            type="checkbox"
                            id="gl-doors"
                            name="product"
                            value="gl-doors"
                          />
                          <label htmlFor="gl-doors">GL Doors</label>
                        </div>
                        <div className="flex gap-1 text-base font-[300] normal-case">
                          <input
                            type="checkbox"
                            id="gi-doors"
                            name="product"
                            value="gi-doors"
                          />
                          <label htmlFor="gi-doors">Gi Doors</label>
                        </div>
                        <div className="flex gap-1 text-base font-[300] normal-case">
                          <input
                            type="checkbox"
                            id="windows"
                            name="product"
                            value="windows"
                          />
                          <label htmlFor="windows">Windows</label>
                        </div>
                        <div className="flex gap-1 text-base font-[300] normal-case">
                          <input
                            type="checkbox"
                            id="fibre-doors"
                            name="product"
                            value="fibre-doors"
                          />
                          <label htmlFor="fibre-doors">Fibre Doors</label>
                        </div>
                        <div className="flex gap-1 text-base font-[300] normal-case">
                          <input
                            type="checkbox"
                            id="wpc-doors"
                            name="product"
                            value="wpc-doors"
                          />
                          <label htmlFor="wpc-doors">WPC Doors</label>
                        </div>
                      </div>
                    </div>
                    <button className="uppercase p-3 px-6 lg:px-8 transform  -skew-x-[20deg] text-sm  font-raleway tracking-[2px] font-[500] bg-amber-400">
                      <span className="inline-block transform skew-x-[20deg]">Submit</span>
                    </button>
                  </div>
                </div>
              )}
            </li>
            {rightRoutes.slice(2,3).map((route) => (
              <li key={route.label}>
                <Link
                  href={route.url}
                  onClick={(e) => handleNavigation(e, route.url)}
                  className={`hover:text-amber-300 transition-all duration-300  ${
                    isActive(route.url) ? "text-amber-300" : "text-black"
                  }`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 1,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Navbar;