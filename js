"use client";
import Image from 'next/image';
import Navbar from './Component/Navbar';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import Footer from './Component/Footer';
import PricingB from './Component/pricingB';
import PrimeLocation from './Component/PrimeLocation';
import BlogSlide from './Component/BlogSlide';
import GST_Invoicing from './Component/GST_Invoicing';
import Unlock from './Component/Unlock';
import Process_Flow from './Component/Process_Flow';
import Testimonial from './Component/Testimonial';
import HomePageCity from './Component/HomePageCity';
import FixedBar from './Component/FixedBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { searchLocation, getAllStates, getStateDetails, getDistrictDetails } from './helper/allfunction';
import { metadata } from './config/env_var';

export default function Home() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [colorChange, setColorChange] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    async function fetchLocations() {
      if (searchValue === '') {
        setLocationList(await getAllStates());
      } else {
        setLocationList(await searchLocation(searchValue));
      }
    }
    fetchLocations();
  }, [searchValue]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setColorChange(window.scrollY >= 50);
    });
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!refOne?.current?.contains(e.target)) {
      setOpenDropDown(false);
    }
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = async (e) => {
    const locations = await searchLocation(searchValue);
    if (!locations || locations.length === 0) {
      router.push('/');
      return;a
    }
    const location = locations[0];
    if (location.type === "state") {
      router.push(`/virtual-office/${location.slug}`);
    } else if (location.type === "district") {
      const stateDetails = await getStateDetails(location.stateId);
      if (stateDetails) {
        router.push(`/virtual-office/${stateDetails[0].slug}/${location.slug}`);
      }
    }
  };

  const handleStateHover = async (stateId) => {
    const districtData = await getDistrictDetails(stateId);
    if ( stateId === stateId || districtId === districtId){
      setDistricts([districtData]);
      console.log(districtData);
        return;
      }

    setDistricts(districtData || [stateId]);
    console.log(districtData);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} theme="colored" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="canonical" href="/" />
      <div className='position-relative '>
        <div className='backbannerImage'>
          <div className={colorChange ? 'ShowBottomColor ChangeStickyNAVset' : 'ShowBottomColor StickyNAVset'}>
            <Navbar />
          </div>
          <div className='py-5'></div>
          <div className='container py-5'>
            <h1 className='text-center BannerSize'>Access Prime Office Locations</h1>
            <div className='text-center'>
              <span className='BannerColorBack BannerSize'>PAN INDIA</span>
              <span className='BannerSize'> with Us</span>
            </div>
            <div className='d-flex justify-content-center mt-5 pb-5 pb-md-0'>
              <form onSubmit={handleSearchClick} className='InputBlockStyle p-2 d-flex justify-content-between'>
                <div className='InputborderSet'>
                  <input
                    value={searchValue}
                    onChange={handleInputChange}
                    onClick={() => setOpenDropDown(true)}
                    className='p-2 p-md-3 me-1 InputborderSet'
                    type="text"
                    placeholder='Search locations'
                  />
                  {openDropDown && (
                    <div className='position-relative ms-5' ref={refOne}>
                      <ul className='SetDropLocation'>
                        {locationList.map((item, id) => (
                          <li 
                            key={id} 
                            onMouseEnter={() => handleStateHover(item.id)} 
                            onClick={() => { setSearchValue(item.name); handleSearchClick(item.name); }} 
                            className='py-1 mb-2 HomeLinePoint'
                          >
                            {item.name}
                            {districts.length > 0 && (
                              <ul className='districtDropdown'>
                                {districts.map((district, idx) => (
                                  <li key={idx}>{district.districtName}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <button type='submit' className="SearchIcon">
                  <Image src="/ColorSearchicon.svg" width={23} height={23} alt="Search" />
                </button>
              </form>
            </div>
            <HomePageCity Virtual={true} />
          </div>
        </div>
        <FixedBar />
        <Unlock />
        <PricingB />
        <PrimeLocation />
        <Process_Flow />
        <BlogSlide /> 
        <GST_Invoicing />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

