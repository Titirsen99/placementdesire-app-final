"use client"
import React from 'react';

const Page = () => {
  const topics = [
    { name: 'Array', description: 'Practice array problems', url: '/prepare/coding/array' },
    { name: 'Matrix', description: 'Practice matrix problems', url: '/prepare/coding/matrix' },
    { name: 'String', description: 'Practice string problems', url: '/prepare/coding/string' },
    { name: 'Search&Sort', description: 'Practice Search&Sort problems', url: '/prepare/coding/searchandsort' },
    { name: 'LinkedList', description: 'Practice Linked List problems', url: '/prepare/coding/linkedlist' },
    { name: 'BinaryTree', description: 'Practice BinaryTree problems', url: '/prepare/coding/binarytree' },
    { name: 'Bst', description: 'Practice Bst problems', url: '/prepare/coding/bst' },
    { name: 'Greedy', description: 'Practice greedy problems', url: '/prepare/coding/greedy' },
    { name: 'BackTracking', description: 'Practice BackTracking problems', url: '/prepare/coding/backtracking' },
    { name: 'Stack and Queue', description: 'Practice Stack and Queue problems', url: '/prepare/coding/stackandq' },
    { name: 'Heap', description: 'Practice Heap problems', url: '/prepare/coding/heap' },
    { name: 'Graph', description: 'Practice Graph problems', url: '/prepare/coding/graph' },
    { name: 'Trie', description: 'Practice Trie problems', url: '/prepare/coding/trie' },
    { name: 'DP', description: 'Practice Dynamic Programing problems', url: '/prepare/coding/dp' },
    { name: 'Bit manipulation', description: 'Practice Bit manipulation problems', url: '/prepare/coding/bitmanipulation' },

  ];

  const openPracticePage = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-wrap justify-center">
      {topics.map((topic, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{topic.name}</div>
            <p className="text-gray-700 text-base">{topic.description}</p>
          </div>
          <div className="px-6 py-4">
            <button
              onClick={() => openPracticePage(topic.url)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Practice
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
