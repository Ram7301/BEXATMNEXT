'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const generateCaptcha = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

export default function ContactUs() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    captchaInput: ''
  });
  const [loading, setLoading] = useState(false);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setFormData({ ...formData, captchaInput: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, mobile, captchaInput } = formData;

    // Validation
    if (!name || !email || !mobile || !captchaInput) {
      toast.error('Please fill all required fields.');
      return;
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      toast.error('Enter a valid 10-digit mobile number.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email address.');
      return;
    }
    if (captchaInput !== captcha) {
      toast.error('CAPTCHA does not match.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        'https://dvmtapi.bexatm.com/ess/api/TrailMailRequestInsertController1.php',
        {
          RecordID: '',
          MailID: email,
          Name: name,
          MobileNumber: mobile,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJzdWIiOiJCZXhAMTIzIiwibmFtZSI6IkJleCIsImFkbWluIjp0cnVlLCJleHAiOjE2Njk5ODQzNDl9.uxE3r3X4lqV_WKrRKRPXd-Jub9BnVcCXqCtLL4I0fpU',
          },
        }
      );

      if (response.data.Status === "Y") {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
          captchaInput: ''
        });
        refreshCaptcha();
      } else {
        toast.error('Failed: ' + (response.data.Msg || 'Unknown error'));
      }
    } catch (error: any) {
      toast.error('Request error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28 -mt-60">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="mb-16 text-center">
        <div className="flex gap-2.5 items-center justify-center mb-3">
          <Icon icon="ph:house-simple-fill" width={20} height={20} className="text-primary" />
          <p className="text-base font-semibold text-badge dark:text-white/90">Contact Us</p>
        </div>
        <h3 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14">
          Have questions? We are ready to help!
        </h3>
      </div>

      <div className="border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side - Contact Info */}
          <div className="relative w-fit">
            <Image
              src="/images/contactUs/contactUs.jpg"
              alt="contact"
              width={497}
              height={535}
              className="rounded-2xl brightness-50 h-full"
              unoptimized
            />
            <div className="absolute top-6 left-6 lg:top-12 lg:left-12 text-white space-y-2">
              <h5 className="text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight">
                Contact information
              </h5>
              <p className="text-sm xs:text-base mobile:text-xm font-normal text-white/80">
                We’re here to help!
              </p>
            </div>
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 text-white space-y-4">
              <Link href="/" className="flex items-center gap-4 group">
                <Icon icon="ph:phone" width={32} height={32} />
                <p className="text-sm font-normal group-hover:text-primary">+91 944 440 8804</p>
              </Link>
              <Link href="/" className="flex items-center gap-4 group">
                <Icon icon="ph:envelope-simple" width={32} height={32} />
                <p className="text-sm font-normal group-hover:text-primary">govee@beyondexs.com</p>
              </Link>
              <div className="flex items-center gap-4">
                <Icon icon="ph:map-pin" width={32} height={32} />
                <p className="text-sm font-normal">
                  Door#: 25/31, Lakshmi Nagar II Main Road, Porur, Chennai,
                  Tamil Nadu - 600116
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Trial Request + Form */}
          <div className="flex-1 w-full space-y-6">
            {/* Trial Heading */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white mb-2">
                Request for 28-days free trial
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Thanks for trying out our - <span className="font-medium text-primary">Agile Task Manager</span>
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Kindly fill the following details!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary w-full"
                />
                <input
                  type="number"
                  name="mobile"
                  placeholder="Phone number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary w-full"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email address*"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary w-full"
              />

              <div>
                <p className="mb-2 text-sm font-medium">CAPTCHA</p>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-black text-white font-mono text-lg font-semibold px-4 py-2 rounded-md">
                    {captcha}
                  </div>
                  <button type="button" onClick={refreshCaptcha} className="text-sm underline text-primary">
                    Refresh
                  </button>
                </div>
                <input
                  type="text"
                  name="captchaInput"
                  placeholder="Enter CAPTCHA"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary w-full"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 rounded-full bg-primary text-white font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300"
              >
                {loading ? 'Sending...' : 'Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
