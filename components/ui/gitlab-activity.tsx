"use client";

import * as React from "react";
import { Info } from "lucide-react";

export function GitLabActivity() {
  const daysPerWeek = 7;
  
  // Handcrafted 2D matrix for March to August 2026 (30 columns x 7 days)
  // Value -1 = Invisible spacer cell (out of month range, rendered as opacity-0 to preserve grid structure)
  // Value 0 = Empty/holiday day (gray box)
  // Value 1-4 = Contribution levels (blue shades)
  const activityData: number[][] = [
    // Mar (Columns 0 - 4) - Starts Sun Mar 1 (Row 6)
    [-1, -1, -1, -1, -1, -1, 0], // Column 0 (Rows 0-5 are Feb/invisible)
    [0, 0, 1, 0, 1, 1, 0],       // Column 1
    [2, 1, 1, 0, 1, 1, 0],       // Column 2
    [1, 1, 1, 1, 1, 1, 0],       // Column 3
    [1, 1, -1, -1, -1, -1, -1],  // Column 4 (Mar 31 is Tue row 1, rows 2-6 invisible)

    // Apr (Columns 5 - 9) - Starts Wed Apr 1 (Row 2)
    [-1, -1, 1, 1, 1, 0, 0],     // Column 5 (Rows 0-1 invisible)
    [2, 1, 0, 2, 1, 1, 0],       // Column 6
    [0, 0, 2, 1, 2, 3, 0],       // Column 7
    [2, 3, 0, 2, 3, 1, 0],       // Column 8
    [1, 0, 0, 1, -1, -1, -1],    // Column 9 (Apr 30 is Thu row 3, rows 4-6 invisible)

    // May (Columns 10 - 14) - Starts Fri May 1 (Row 4)
    [-1, -1, -1, -1, 1, 1, 0],   // Column 10 (Rows 0-3 invisible)
    [2, 1, 2, 2, 2, 2, 0],       // Column 11
    [1, 0, 2, 2, 1, 2, 0],       // Column 12
    [1, 2, 2, 0, 2, 1, 0],       // Column 13
    [1, 1, 1, 1, 1, 1, 0],       // Column 14 (May 31 is Sun row 6)

    // Jun (Columns 15 - 19) - Starts Mon Jun 1 (Row 0)
    [2, 0, 0, 0, 1, 0, 0],       // Column 15
    [0, 2, 0, 2, 3, 2, 0],       // Column 16
    [1, 0, 2, 3, 1, 0, 0],       // Column 17
    [1, 2, 0, 0, 2, 2, 0],       // Column 18
    [1, 1, -1, -1, -1, -1, -1],  // Column 19 (Jun 30 is Tue row 1, rows 2-6 invisible)

    // Jul (Columns 20 - 24) - Starts Wed Jul 1 (Row 2)
    [-1, -1, 1, 1, 1, 0, 0],     // Column 20 (Rows 0-1 invisible)
    [1, 1, 2, 1, 2, 2, 0],       // Column 21
    [2, 2, 1, 1, 2, 1, 0],       // Column 22
    [1, 1, 1, 2, 2, 2, 0],       // Column 23
    [2, 2, 0, 2, 0, -1, -1],     // Column 24 (Jul 31 is Fri row 4, rows 5-6 invisible)

    // Aug (Columns 25 - 29) - Starts Sat Aug 1 (Row 5) - All 0 Activity
    [-1, -1, -1, -1, -1, 0, 0],  // Column 25 (Rows 0-4 invisible)
    [0, 0, 0, 0, 0, 0, 0],       // Column 26
    [0, 0, 0, 0, 0, 0, 0],       // Column 27
    [0, 0, 0, 0, 0, 0, 0],       // Column 28
    [0, 0, 0, 0, 0, 0, 0],       // Column 29
  ];

  const monthsData = [
    { label: "Mar", colSpan: 5 },
    { label: "Apr", colSpan: 5 },
    { label: "May", colSpan: 5 },
    { label: "Jun", colSpan: 5 },
    { label: "Jul", colSpan: 5 },
    { label: "Aug", colSpan: 5 },
  ];

  return (
    <div className="border-border bg-card/45 rounded-xl border p-4 shadow-sm backdrop-blur-sm sm:p-5 w-full">
      {/* Header Info */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
        <div>
          <h4 className="text-foreground text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
            GitLab Activity
          </h4>
          <p className="text-muted-foreground mt-0.5 text-[10px] font-light">
            Issues, merge requests, pushes, and comments.
          </p>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-medium">
          <Info className="h-3.5 w-3.5 text-brand-primary" />
          <span>Member since March 02, 2026</span>
        </div>
      </div>

      {/* Grid Container with horizontal scroll protection */}
      <div className="select-none w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border/20">
        <div className="min-w-[490px] pr-1 grid grid-cols-[20px_1fr] gap-2">
          
          {/* Day Labels aligned exactly with 7-row heights */}
          <div className="flex flex-col justify-between text-[8px] text-muted-foreground/60 font-bold text-right pr-1 h-[98px] mt-[16px] py-[1px] leading-none">
            <span className="h-[11px] flex items-center justify-end">M</span>
            <span className="h-[11px] flex items-center justify-end"></span>
            <span className="h-[11px] flex items-center justify-end">W</span>
            <span className="h-[11px] flex items-center justify-end"></span>
            <span className="h-[11px] flex items-center justify-end">F</span>
            <span className="h-[11px] flex items-center justify-end"></span>
            <span className="h-[11px] flex items-center justify-end">S</span>
          </div>

          {/* Unified Month & Activity Grid Container */}
          <div className="flex flex-col gap-1.5">
            {/* Month Labels Row */}
            <div className="flex gap-[3.5px] w-full">
              {monthsData.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`flex-1 text-center ${idx !== monthsData.length - 1 ? "mr-2.5" : ""}`}
                >
                  <span className="text-[9px] text-muted-foreground/80 font-bold block text-center">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Continuous 30 Columns Stream Grid with Month Spacers */}
            <div className="flex gap-[3.5px] h-[98px]">
              {activityData.map((col, colIdx) => (
                <div 
                  key={colIdx} 
                  className={`flex flex-col gap-[3.5px] ${(colIdx + 1) % 5 === 0 && colIdx !== activityData.length - 1 ? "mr-2.5" : ""}`}
                >
                  {col.map((level, dIndex) => {
                    if (level === -1) {
                      return (
                        <div
                          key={dIndex}
                          className="h-[11px] w-[11px] rounded-[2px] opacity-0 pointer-events-none"
                        />
                      );
                    }

                    return (
                      <div
                        key={dIndex}
                        className="h-[11px] w-[11px] rounded-[2px] border transition-all duration-200 hover:scale-125 hover:z-10 cursor-pointer"
                        style={{
                          backgroundColor:
                            level === 0
                              ? "var(--level-0, #e2e8f0)"
                              : level === 1
                                ? "var(--level-1, #93c5fd)"
                                : level === 2
                                  ? "var(--level-2, #3b82f6)"
                                  : level === 3
                                    ? "var(--level-3, #1d4ed8)"
                                    : "var(--level-4, #1e3a8a)",
                          borderColor:
                            level === 0
                              ? "var(--level-border-0, #cbd5e1)"
                              : level === 1
                                ? "var(--level-border-1, #60a5fa)"
                                : level === 2
                                  ? "var(--level-border-2, #2563eb)"
                                  : level === 3
                                    ? "var(--level-border-3, #1e40af)"
                                    : "var(--level-border-4, #172554)",
                        }}
                        title={
                          level === 0
                            ? "No contributions"
                            : level === 1
                              ? "1-9 contributions"
                              : level === 2
                                ? "10+ contributions"
                                : level === 3
                                  ? "20+ contributions"
                                  : "30+ contributions"
                        }
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Legend Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3 text-[9px] text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="flex gap-[3px]">
            <span title="No contributions" className="h-[10px] w-[10px] rounded-[2px] border border-[var(--level-border-0,#cbd5e1)] bg-[var(--level-0,#e2e8f0)] cursor-pointer" />
            <span title="1-9 contributions" className="h-[10px] w-[10px] rounded-[2px] border border-[var(--level-border-1,#60a5fa)] bg-[var(--level-1,#93c5fd)] cursor-pointer" />
            <span title="10-19 contributions" className="h-[10px] w-[10px] rounded-[2px] border border-[var(--level-border-2,#2563eb)] bg-[var(--level-2,#3b82f6)] cursor-pointer" />
            <span title="20-29 contributions" className="h-[10px] w-[10px] rounded-[2px] border border-[var(--level-border-3,#1e40af)] bg-[var(--level-3,#1d4ed8)] cursor-pointer" />
            <span title="30+ contributions" className="h-[10px] w-[10px] rounded-[2px] border border-[var(--level-border-4,#172554)] bg-[var(--level-4,#1e3a8a)] cursor-pointer" />
          </div>
          <span>More</span>
        </div>
        <span className="text-[9px] font-medium text-muted-foreground/70">
          Private contribution activity
        </span>
      </div>
    </div>
  );
}
