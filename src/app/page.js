export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      {/* Hero Section */}
      <div className="hero min-h-96 bg-base-200 rounded-lg mb-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">daisyUI Component Showcase</h1>
            <p className="py-6">Complete collection of daisyUI components with Poppins font</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Buttons</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="btn">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-outline btn-primary">Primary Outline</button>
          <button className="btn btn-outline btn-secondary">Secondary Outline</button>
          <button className="btn btn-outline btn-accent">Accent Outline</button>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="btn btn-xs">Extra Small</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-md">Medium</button>
          <button className="btn btn-lg">Large</button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://picsum.photos/400/300" alt="Random" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>This is a test card using daisyUI components.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Action</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Another Card</h2>
              <p>Testing different card layouts and styles.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Form Card</h2>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Enter email" className="input input-bordered w-full" />
                <label className="label">
                  <span className="label-text-alt">We'll never share your email</span>
                </label>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Alerts</h2>
        <div className="space-y-4">
          <div role="alert" className="alert">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Info alert!</span>
          </div>
          <div role="alert" className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Success alert!</span>
          </div>
          <div role="alert" className="alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <span>Warning alert!</span>
          </div>
          <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Error alert!</span>
          </div>
        </div>
      </section>

      {/* Form Elements Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Form Elements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Enter email" className="input input-bordered w-full" />
            <label className="label">
              <span className="label-text-alt">We'll never share your email</span>
            </label>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="input input-bordered w-full" />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Select</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>Pick one</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Textarea</span>
            </label>
            <textarea className="textarea textarea-bordered" placeholder="Enter message"></textarea>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Stats</h2>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://picsum.photos/80/80" alt="Avatar" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <span className="badge">Default</span>
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-accent">Accent</span>
          <span className="badge badge-neutral">Neutral</span>
          <span className="badge badge-info">Info</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-error">Error</span>
          <span className="badge badge-outline">Outline</span>
        </div>
      </section>

      {/* Progress Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Progress</h2>
        <div className="space-y-4">
          <progress className="progress w-full" value="32" max="100"></progress>
          <progress className="progress progress-primary w-full" value="70" max="100"></progress>
          <progress className="progress progress-secondary w-full" value="50" max="100"></progress>
          <progress className="progress progress-accent w-full" value="90" max="100"></progress>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded-lg">
        <div>
          <p className="font-bold">
            daisyUI Component Showcase
            <br />
            Built with Next.js + Tailwind CSS + daisyUI
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
}
