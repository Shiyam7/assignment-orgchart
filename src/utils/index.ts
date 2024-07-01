import React from "react";
import 'string_score';

export interface DefaultProps {
    TestId: string;
    Style: React.CSSProperties;
    ClassName: string[];
    Children: React.ReactNode;
}

export interface Employee {
    id: Number,
    name: String,
    designation: String,
    team: String,
    manager: String | Number
}

export interface Option {
    label: String;
    value: String;
}

export const ALL = 'ALL';

export function matchFilter(allItems: any[], query: string, threshold: number = 0.005) {
    const matchingItems = allItems.filter(item => {     
      const itemComp = Object.keys(item).map(p => item[p]).filter(q => q !== null && q !== '').reduce((prev, curr) => { prev += curr; return prev;}, '');  
      const score = itemComp.score(query);
      return score >= threshold;
    });  
    return matchingItems;
 }