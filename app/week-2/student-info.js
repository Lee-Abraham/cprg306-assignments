import Link from 'next/link';

export default function StudentInfo() { 
    return ( 
        <main> 
            // Student Information for Lee
            <div>
                <h2>Lee</h2>
            </div>

            // Student Information for Kevin
            <div>
                <h2>Kevin</h2>
            </div>

            // Student Information for Aileen
            <div>
                <h2>Aileen</h2>
            </div>
            // Link to GitHub Repository
            <nav>
                <Link href="https://github.com/Lee-Abraham/cprg306-assignments"> GitHub repository </Link>
            </nav>
        </main> 
    ); 
}