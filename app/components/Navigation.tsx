'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };
  
  return (
    <nav className="main-navigation">
      <div className="nav-logo">
        <Link href="/">
          <span className="logo-text">Boys to Leaders</span>
        </Link>
      </div>
      
      <ul className="nav-links">
        <li className={isActive('/')}>
          <Link href="/">Dashboard</Link>
        </li>
        <li className={isActive('/learning')}>
          <Link href="/learning">Learning</Link>
        </li>
        <li className={isActive('/achievements')}>
          <Link href="/achievements">Achievements</Link>
        </li>
        <li className={isActive('/community')}>
          <Link href="/community">Community</Link>
        </li>
        <li className={isActive('/profile')}>
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      
      <div className="nav-actions">
        <button className="btn btn-sm btn-outline">
          Sign Out
        </button>
      </div>
    </nav>
  );
}
