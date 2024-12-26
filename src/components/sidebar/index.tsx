'use client';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import epicLogo from '@/assets/images/epicLogo.png';
import contractManagement from '@/assets/icons/contractManagement.svg';
import Image from 'next/image';

interface MenuItem {
  title: string;
  icon: string;
  items: string[];
}

const Sidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    'Contract Management': true,
  });
  const [selectedItem, setSelectedItem] = useState<string>('Brand Onboarding');

  const menuItems: MenuItem[] = [
    {
      title: 'Contract Management',
      icon: contractManagement,
      items: ['Brand Onboarding'],
    },
    // {
    //   title: 'User Management',
    //   icon: <FiFileText className="w-5 h-5 text-gray-600" />,
    //   items: ['Add User', 'Roles', 'Permissions'],
    // },
    // {
    //   title: 'Settings',
    //   icon: <FiFileText className="w-5 h-5 text-gray-600" />,
    //   items: ['General', 'Notifications', 'Security'],
    // },
  ];

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="w-64 min-h-screen bg-white">
      <Image
        src={epicLogo}
        alt="Brand Logo"
        height={60}
        width={36}
        className="my-3 mx-4"
      />
      <div className="mt-5">
        {menuItems.map((menu) => (
          <div key={menu.title}>
            <button
              onClick={() => toggleMenu(menu.title)}
              className={`w-full flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                openMenus[menu.title]
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={{
                color: `${openMenus[menu.title] ? '#0168B4' : 'black'}`,
              }}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={menu.icon}
                  alt={menu.title}
                  style={{ height: '16px', width: '16px' }}
                />
                <span className="font-medium">{menu.title}</span>
              </div>
              {openMenus[menu.title] ? (
                <MdKeyboardArrowDown className="w-4 h-4" />
              ) : (
                <MdKeyboardArrowUp className="w-4 h-4" />
              )}
            </button>

            {openMenus[menu.title] && (
              <div className="space-y-1">
                {menu.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedItem(item)}
                    className={`w-full text-left py-2 px-9 transition-colors ${
                      selectedItem === item
                        ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
