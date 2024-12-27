import React from 'react';
import { Header } from '../components/layout/Header';
import { LiveScores } from '../components/LiveScores';
import { TrendingSection } from '../components/trending/TrendingSection';
import { DiscussionSection } from '../components/discussion/DiscussionSection';
import { FeaturedPlayers } from '../components/featured/FeaturedPlayers';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-8">
            <LiveScores />
          </section>
          
          <aside className="lg:col-span-4">
            <TrendingSection />
          </aside>

          <section className="lg:col-span-8">
            <DiscussionSection />
          </section>

          <FeaturedPlayers />
        </div>
      </main>
    </div>
  );
}