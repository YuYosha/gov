// Hacking Screen Sequence
document.addEventListener('DOMContentLoaded', function() {
    const hackingScreen = document.getElementById('hackingScreen');
    const hackTerminal = document.getElementById('hackTerminal');
    const hackProgressFill = document.getElementById('hackProgressFill');
    const hackProgressText = document.getElementById('hackProgressText');
    const hackProgressLabel = document.getElementById('hackProgressLabel');
    const hackTarget = document.getElementById('hackTarget');
    const hackVectors = document.getElementById('hackVectors');
    const hackCVEs = document.getElementById('hackCVEs');
    const hackStatus = document.getElementById('hackStatus');
    
    // Hacking sequence steps - much more elaborate
    const hackSteps = [
        { delay: 300, text: 'nmap --scan acc.secure.net', output: '[INFO] Initializing network scan...' },
        { delay: 600, text: '', output: '[SCAN] Scanning 1024 ports...' },
        { delay: 900, text: '', output: '[SCAN] Port 22/tcp   open  ssh' },
        { delay: 1200, text: '', output: '[SCAN] Port 80/tcp   open  http' },
        { delay: 1500, text: '', output: '[SCAN] Port 443/tcp  open  https' },
        { delay: 1800, text: '', output: '[SCAN] Port 8080/tcp open  http-proxy' },
        { delay: 2100, text: '', output: '[WARNING] Firewall detected: ACC-SEC-FW-01' },
        { delay: 2400, text: 'exploit --target acc.secure.net --port 443', output: '[EXPLOIT] Attempting SSL/TLS handshake bypass...' },
        { delay: 2700, text: '', output: '[ERROR] Connection refused. Retrying with different method...' },
        { delay: 3000, text: 'bypass --firewall ACC-SEC-FW-01', output: '[BYPASS] Analyzing firewall rules...' },
        { delay: 3300, text: '', output: '[BYPASS] Rule 44-Beta detected. Applying workaround...' },
        { delay: 3600, text: '', output: '[BYPASS] Firewall rules modified. Access granted.' },
        { delay: 3900, text: 'scan --vulnerabilities', output: '[SCAN] Searching for known vulnerabilities...' },
        { delay: 4200, text: '', output: '[SCAN] CVE-2274-1337: Remote code execution (CRITICAL)' },
        { delay: 4500, text: '', output: '[SCAN] CVE-2274-2048: Privilege escalation (HIGH)' },
        { delay: 4800, text: '', output: '[SCAN] CVE-2274-4096: SQL injection (MEDIUM)' },
        { delay: 5100, text: 'exploit --cve CVE-2274-1337', output: '[EXPLOIT] Exploiting CVE-2274-1337...' },
        { delay: 5400, text: '', output: '[EXPLOIT] Payload crafted: 247 bytes' },
        { delay: 5700, text: '', output: '[EXPLOIT] Injecting payload into target system...' },
        { delay: 6000, text: '', output: '[EXPLOIT] Payload executed successfully' },
        { delay: 6300, text: 'bruteforce --service ssh --wordlist /usr/share/wordlists/rockyou.txt', output: '[BRUTEFORCE] Loading wordlist: 14,344,392 entries' },
        { delay: 6600, text: '', output: '[BRUTEFORCE] Attempting credential bypass...' },
        { delay: 6900, text: '', output: '[BRUTEFORCE] Attempt 1/1000: Failed' },
        { delay: 7200, text: '', output: '[BRUTEFORCE] Attempt 47/1000: Failed' },
        { delay: 7500, text: '', output: '[BRUTEFORCE] Attempt 128/1000: SUCCESS' },
        { delay: 7800, text: '', output: '[BRUTEFORCE] Credentials: admin:**********' },
        { delay: 8100, text: 'connect --ssh admin@acc.secure.net', output: '[CONNECT] Establishing SSH connection...' },
        { delay: 8400, text: '', output: '[CONNECT] Connection established. Shell access granted.' },
        { delay: 8700, text: 'inject --payload backdoor.sh --location /tmp/', output: '[INJECT] Uploading payload to target system...' },
        { delay: 9000, text: '', output: '[INJECT] Payload size: 1.2 MB' },
        { delay: 9300, text: '', output: '[INJECT] Payload deployed to /tmp/backdoor.sh' },
        { delay: 9600, text: 'execute --payload /tmp/backdoor.sh', output: '[EXECUTE] Executing payload...' },
        { delay: 9900, text: '', output: '[EXECUTE] Payload executed. Backdoor active.' },
        { delay: 10200, text: 'elevate --privileges root', output: '[ELEVATE] Attempting privilege escalation...' },
        { delay: 10500, text: '', output: '[ELEVATE] Exploiting CVE-2274-2048...' },
        { delay: 10800, text: '', output: '[ELEVATE] Privilege escalation successful. Root access obtained.' },
        { delay: 11100, text: 'access --system classified --level 5', output: '[ACCESS] Accessing classified system...' },
        { delay: 11400, text: '', output: '[ACCESS] Security clearance: LEVEL 5' },
        { delay: 11700, text: '', output: '[ACCESS] System access granted. Welcome, Agent.' },
        { delay: 12000, text: 'cover --tracks --method deep', output: '[COVER] Modifying system logs...' },
        { delay: 12300, text: '', output: '[COVER] Access logs: 1,247 entries modified' },
        { delay: 12600, text: '', output: '[COVER] Security logs: 892 entries deleted' },
        { delay: 12900, text: '', output: '[COVER] Network traces: Erased' },
        { delay: 13200, text: '', output: '[COVER] All traces eliminated. Operation clean.' },
        { delay: 13500, text: 'exit', output: '[EXIT] Terminating connection...' },
        { delay: 13800, text: '', output: '[EXIT] Connection closed. No traces left behind.' }
    ];
    
    const progressSteps = [
        { time: 300, progress: 5, label: 'Initializing breach protocol...' },
        { time: 600, progress: 8, label: 'Scanning target network...' },
        { time: 900, progress: 12, label: 'Identifying open ports...' },
        { time: 1200, progress: 15, label: 'Analyzing firewall configuration...' },
        { time: 1500, progress: 18, label: 'Bypassing security protocols...' },
        { time: 1800, progress: 22, label: 'Firewall rules compromised...' },
        { time: 2100, progress: 25, label: 'Searching for vulnerabilities...' },
        { time: 2400, progress: 30, label: 'Multiple CVEs identified...' },
        { time: 2700, progress: 35, label: 'Exploiting critical vulnerability...' },
        { time: 3000, progress: 40, label: 'Payload injection in progress...' },
        { time: 3300, progress: 45, label: 'Bypassing authentication...' },
        { time: 3600, progress: 50, label: 'Bruteforce attack initiated...' },
        { time: 3900, progress: 55, label: 'Credentials compromised...' },
        { time: 4200, progress: 60, label: 'Establishing secure connection...' },
        { time: 4500, progress: 65, label: 'Uploading backdoor payload...' },
        { time: 4800, progress: 70, label: 'Payload deployed successfully...' },
        { time: 5100, progress: 75, label: 'Executing remote commands...' },
        { time: 5400, progress: 80, label: 'Escalating privileges...' },
        { time: 5700, progress: 85, label: 'Root access obtained...' },
        { time: 6000, progress: 88, label: 'Accessing classified systems...' },
        { time: 6300, progress: 90, label: 'Security clearance verified...' },
        { time: 6600, progress: 92, label: 'System access granted...' },
        { time: 6900, progress: 94, label: 'Covering tracks...' },
        { time: 7200, progress: 96, label: 'Modifying system logs...' },
        { time: 7500, progress: 97, label: 'Erasing network traces...' },
        { time: 7800, progress: 97.5, label: 'Finalizing breach...' },
        { time: 8100, progress: 98, label: 'Terminating connection...' },
        { time: 8400, progress: 98.5, label: 'Cleaning up traces...' },
        { time: 8700, progress: 99, label: 'Verifying access...' },
        { time: 9000, progress: 99.3, label: 'System integration complete...' },
        { time: 9300, progress: 99.5, label: 'Final security check...' },
        { time: 9600, progress: 99.7, label: 'Establishing secure session...' },
        { time: 9900, progress: 99.8, label: 'Loading classified interface...' },
        { time: 10200, progress: 99.9, label: 'Initializing system...' },
        { time: 10500, progress: 99.95, label: 'Almost there...' },
        { time: 10800, progress: 99.98, label: 'Finalizing connection...' },
        { time: 11100, progress: 99.99, label: 'Preparing access...' },
        { time: 11400, progress: 100, label: 'Access granted. Welcome, Agent.' },
        { time: 11700, progress: 100, label: 'Access granted. Welcome, Agent.' },
        { time: 12000, progress: 100, label: 'Access granted. Welcome, Agent.' },
        { time: 12300, progress: 100, label: 'Access granted. Welcome, Agent.' },
        { time: 12600, progress: 100, label: 'Access granted. Welcome, Agent.' },
        { time: 12900, progress: 100, label: 'Access granted. Welcome, Agent.' },
        { time: 13200, progress: 100, label: 'Access granted. Welcome, Agent.' },
        { time: 13500, progress: 100, label: 'Access granted. Welcome, Agent.' },
        { time: 13800, progress: 100, label: 'Access granted. Welcome, Agent.' }
    ];
    
    let stepIndex = 0;
    let progressIndex = 0;
    
    // Add hack line with error support
    function addHackLine(text, isOutput = false, isError = false) {
        const line = document.createElement('div');
        line.className = 'hack-line';
        
        if (isOutput) {
            if (isError) {
                line.innerHTML = `<span class="hack-output hack-error">${text}</span>`;
            } else {
                line.innerHTML = `<span class="hack-output">${text}</span>`;
            }
        } else if (text) {
            // Extract command from full text
            const command = text;
            line.innerHTML = `<span class="hack-prompt">root@external:~$</span><span class="hack-command">${command}</span>`;
        }
        
        hackTerminal.appendChild(line);
        // Auto-scroll to bottom
        hackTerminal.scrollTop = hackTerminal.scrollHeight;
    }
    
    // Execute hack steps
    function executeHackStep() {
        if (stepIndex < hackSteps.length) {
            const step = hackSteps[stepIndex];
            setTimeout(() => {
                if (step.text) {
                    addHackLine(step.text);
                }
                if (step.output) {
                    setTimeout(() => {
                        const isError = step.output.includes('[ERROR]') || step.output.includes('Failed');
                        addHackLine(step.output, true, isError);
                    }, step.text ? 400 : 200);
                }
                stepIndex++;
                if (stepIndex < hackSteps.length) {
                    executeHackStep();
                }
            }, step.delay);
        }
    }
    
    // Update progress - using relative delays
    function updateProgress() {
        if (progressIndex < progressSteps.length) {
            const step = progressSteps[progressIndex];
            const prevTime = progressIndex > 0 ? progressSteps[progressIndex - 1].time : 0;
            const delay = step.time - prevTime; // Calculate relative delay
            
            setTimeout(() => {
                hackProgressFill.style.width = step.progress + '%';
                hackProgressText.textContent = step.progress + '%';
                hackProgressLabel.textContent = step.label;
                progressIndex++;
                if (progressIndex < progressSteps.length) {
                    updateProgress();
                }
            }, delay);
        }
    }
    
    // Update stats dynamically
    function updateHackStats() {
        setTimeout(() => {
            if (hackVectors) hackVectors.textContent = '1';
            if (hackStatus) hackStatus.textContent = 'SCANNING';
        }, 500);
        
        setTimeout(() => {
            if (hackVectors) hackVectors.textContent = '2';
            if (hackStatus) hackStatus.textContent = 'EXPLOITING';
        }, 2400);
        
        setTimeout(() => {
            if (hackCVEs) hackCVEs.textContent = '1';
        }, 4200);
        
        setTimeout(() => {
            if (hackCVEs) hackCVEs.textContent = '3';
            if (hackVectors) hackVectors.textContent = '3';
        }, 4800);
        
        setTimeout(() => {
            if (hackStatus) hackStatus.textContent = 'COMPROMISED';
            if (hackStatus) hackStatus.style.color = '#ff0000';
            if (hackStatus) hackStatus.style.textShadow = '0 0 10px #ff0000';
        }, 8100);
        
        setTimeout(() => {
            if (hackStatus) hackStatus.textContent = 'ACCESS GRANTED';
            if (hackStatus) hackStatus.style.color = '#00ff00';
            if (hackStatus) hackStatus.style.textShadow = '0 0 10px #00ff00';
        }, 12000);
    }
    
    // Start hacking sequence
    setTimeout(() => {
        executeHackStep();
        updateProgress();
        updateHackStats();
    }, 500);
    
    // Hide hacking screen after sequence (extended time to match last step + fade time)
    setTimeout(() => {
        // Add hiding class for glitch transition
        hackingScreen.classList.add('hiding');
        
        // Play glitch sound at the start of transition
        const glitchSound = document.getElementById('glitchSound');
        if (glitchSound) {
            glitchSound.currentTime = 0;
            glitchSound.play().catch(e => console.log('Audio play failed:', e));
        }
        
        setTimeout(() => {
            hackingScreen.classList.add('hidden');
            // Show main content
            document.body.classList.remove('loading');
            document.body.style.overflow = '';
            document.body.style.height = '';
            
            // Start background music after loading screen
            const backgroundMusic = document.getElementById('backgroundMusic');
            if (backgroundMusic) {
                backgroundMusic.volume = 0.3; // Set volume to 30%
                backgroundMusic.play().catch(e => {
                    console.log('Music play failed:', e);
                    // Try again after user interaction
                    document.addEventListener('click', function startMusic() {
                        backgroundMusic.play().catch(err => console.log('Music play failed:', err));
                        document.removeEventListener('click', startMusic);
                    }, { once: true });
                });
            }
        }, 800); // Wait for glitch animation to complete
    }, 14200); // Hide after hack sequence completes (13800 + buffer)
    
    // Keep screen visible initially and prevent scrolling
    hackingScreen.classList.add('active');
    document.body.classList.add('loading');
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
});

// Random Glitch Effects on Main Screen
document.addEventListener('DOMContentLoaded', function() {
    // Wait for loading screen to finish
    setTimeout(() => {
        function triggerRandomGlitch() {
            // Don't glitch if city view is open
            const cityViewScreen = document.getElementById('cityViewScreen');
            if (cityViewScreen && !cityViewScreen.classList.contains('hidden')) {
                return; // Skip glitch when city view is active
            }
            
            // Remove any existing glitch classes
            document.body.classList.remove('glitch-mild', 'glitch-medium', 'glitch-severe', 'glitch-extreme');
            
            // Random delay before applying glitch (0-100ms to avoid flicker)
            setTimeout(() => {
                // Random glitch intensity
                const glitchTypes = ['glitch-mild', 'glitch-medium', 'glitch-severe', 'glitch-extreme'];
                const weights = [0.4, 0.3, 0.2, 0.1]; // Mild more common, extreme rare
                
                let random = Math.random();
                let selectedType = 'glitch-mild';
                let cumulative = 0;
                
                for (let i = 0; i < glitchTypes.length; i++) {
                    cumulative += weights[i];
                    if (random <= cumulative) {
                        selectedType = glitchTypes[i];
                        break;
                    }
                }
                
                document.body.classList.add(selectedType);
                
                // Play glitch sound
                const glitchSound = document.getElementById('glitchSound');
                if (glitchSound) {
                    glitchSound.currentTime = 0;
                    glitchSound.play().catch(e => console.log('Glitch sound play failed:', e));
                }
                
                // Remove glitch class after animation completes (longer durations)
                const duration = selectedType === 'glitch-mild' ? 600 :
                                selectedType === 'glitch-medium' ? 1000 :
                                selectedType === 'glitch-severe' ? 1500 : 2000;
                
                setTimeout(() => {
                    document.body.classList.remove(selectedType);
                }, duration);
            }, Math.random() * 100);
        }
        
        // Initial delay before first glitch (5-10 seconds)
        const initialDelay = 5000 + Math.random() * 5000;
        
        setTimeout(() => {
            // Trigger first glitch
            triggerRandomGlitch();
            
            // Set up interval for random glitches (every 8-20 seconds)
            function scheduleNextGlitch() {
                const delay = 8000 + Math.random() * 12000; // 8-20 seconds
                setTimeout(() => {
                    triggerRandomGlitch();
                    scheduleNextGlitch(); // Schedule next one
                }, delay);
            }
            
            scheduleNextGlitch();
        }, initialDelay);
    }, 15000); // Wait for loading screen to complete
});

// Passcode functionality
document.addEventListener('DOMContentLoaded', function() {
    const passcodeInput = document.getElementById('passcodeInput');
    const accessButton = document.getElementById('accessButton');
    const passcodeError = document.getElementById('passcodeError');
    const secretFilesSection = document.getElementById('secretFilesSection');
    const filesGrid = document.getElementById('filesGrid');
    const fileCount = document.getElementById('fileCount');
    
    const CORRECT_PASSCODE = 'yes';
    
    function checkPasscode() {
        const enteredPasscode = passcodeInput.value.toLowerCase().trim();
        
        if (enteredPasscode === CORRECT_PASSCODE) {
            // Correct passcode
            passcodeError.textContent = '';
            passcodeError.classList.remove('show');
            secretFilesSection.classList.remove('hidden');
            
            // Update file count
            const fileItems = filesGrid.querySelectorAll('.file-item');
            fileCount.textContent = fileItems.length;
            
            // Clear input
            passcodeInput.value = '';
            passcodeInput.type = 'password';
            
            // Add success message to terminal
            const terminalBody = document.querySelector('.terminal-body');
            const cursor = document.querySelector('.cursor');
            const successLine = document.createElement('div');
            successLine.className = 'terminal-line';
            successLine.innerHTML = '<span class="output">[SYSTEM] Access granted. Classified files unlocked.</span>';
            terminalBody.insertBefore(successLine, cursor.parentElement);
        } else {
            // Wrong passcode
            passcodeError.textContent = '[ERROR] Access denied. Invalid passcode.';
            passcodeError.classList.add('show');
            passcodeInput.value = '';
            
            // Add error message to terminal
            const terminalBody = document.querySelector('.terminal-body');
            const cursor = document.querySelector('.cursor');
            const errorLine = document.createElement('div');
            errorLine.className = 'terminal-line';
            errorLine.innerHTML = '<span class="output" style="color: #ff0000;">[SYSTEM] Access denied. Unauthorized attempt logged.</span>';
            terminalBody.insertBefore(errorLine, cursor.parentElement);
        }
    }
    
    accessButton.addEventListener('click', checkPasscode);
    
    passcodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPasscode();
        }
    });
    
    // Terminal typing effect
    const terminalBody = document.querySelector('.terminal-body');
    const cursor = document.querySelector('.cursor');
    
    // Simulate terminal commands
    const commands = [
        { text: 'scan_system', delay: 2000 },
        { text: 'verify_clearance', delay: 1500 },
        { text: 'access_logs', delay: 2000 }
    ];
    
    let commandIndex = 0;
    
    function addTerminalLine(text, isCommand = false) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        
        if (isCommand) {
            line.innerHTML = `<span class="prompt">root@classified:~$</span><span class="command">${text}</span>`;
        } else {
            line.innerHTML = `<span class="output">${text}</span>`;
        }
        
        terminalBody.insertBefore(line, cursor.parentElement);
    }
    
    function executeCommand() {
        if (commandIndex < commands.length) {
            const cmd = commands[commandIndex];
            addTerminalLine(cmd.text, true);
            
            setTimeout(() => {
                const responses = [
                    '[SYSTEM] Security scan complete. No threats detected.',
                    '[SYSTEM] Clearance level verified: LEVEL 5',
                    '[SYSTEM] Access logs retrieved. 1,247 entries found.'
                ];
                addTerminalLine(responses[commandIndex]);
                commandIndex++;
                
                if (commandIndex < commands.length) {
                    setTimeout(executeCommand, cmd.delay);
                }
            }, 1000);
        }
    }
    
    // Start command sequence after initial delay
    setTimeout(executeCommand, 3000);
    
    // Add some random "system activity" messages
    setInterval(() => {
        const messages = [
            '[SYSTEM] Monitoring active...',
            '[SYSTEM] All systems operational.',
            '[SYSTEM] Security protocols maintained.'
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Only add if we haven't added too many lines
        if (terminalBody && terminalBody.children.length < 15) {
            addTerminalLine(randomMessage);
        }
    }, 10000);

    // File viewing functionality
    const fileViewer = document.getElementById('fileViewer');
    const viewerBody = document.getElementById('viewerBody');
    const viewerFileName = document.getElementById('viewerFileName');
    const closeViewer = document.getElementById('closeViewer');
    
    const fileContents = {
        '002': {
            name: 'FILE_002_CORP_MEMO_RESOURCE_REALLOC.txt',
            content: `TO: Sector Chief T. Kellar, Resource Management Division
FROM: Executive Comptroller R. Vance, ACC Internal Oversight
DATE: 15.08.2274
SUBJECT: Scheduled Water Redistribution and Tier 3 Consumption Quota Adjustment
CLASSIFICATION: LEVEL 4 - INTERNAL USE ONLY
DISTRIBUTION: Directorate Members, Sector Chiefs, Resource Allocation Committee

═══════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY:
The Aethelburg Water Filtration Plant (WFP-03) has exceeded its maximum operational efficiency for Q3 2274. This surplus capacity presents both an opportunity and a strategic necessity for maintaining our established resource hierarchy and economic control mechanisms.

═══════════════════════════════════════════════════════════════════

OPERATIONAL ANALYSIS:

Current Status:
- WFP-03 has achieved 127% of projected output capacity
- Surplus purified H₂O: Approximately 4.2 million liters per cycle
- Current Tier 3 allocation: 18% of total production (standard quota)
- Tier 1 Executive Domes consumption: 45% of total production
- ERD Research Complex (Project 01): 12% of total production

Per Directive 44-Beta (Resource Allocation Protocol), the surplus capacity must be immediately rerouted as follows:

PRIMARY ALLOCATION (75% of surplus):
→ Tier 1 Executive Domes: 55% of surplus (2.31M liters/cycle)
  - Enhanced luxury water features
  - Private recreational facilities
  - Expanded personal consumption allowances

→ ERD Research Complex - Project 01 Habitat Maintenance: 20% of surplus (840K liters/cycle)
  - Critical for maintaining optimal containment environment
  - Required for bioreactor cooling systems
  - Essential for subject stability protocols

SECONDARY ALLOCATION (25% of surplus):
→ Tier 3 Residential Blocks ("Lower Spires"): 25% of surplus (1.05M liters/cycle)
  - To be used for MINIMAL dilution of existing slurry mix
  - Dilution ratio: 1:15 (surplus:slurry)
  - Public announcement: "Water quality improvement initiative"

═══════════════════════════════════════════════════════════════════

MANDATORY QUOTA REDUCTION:

Effective immediately, Tier 3 consumption quotas are to be reduced by an additional 15% from current baseline. This reduction is MANDATORY and serves multiple strategic purposes:

1. Maintains the perception of scarcity
2. Justifies existing "Resource Tax" structure
3. Prevents population growth in Tier 3 sectors
4. Reinforces dependency on ACC resource management
5. Creates artificial demand for "premium" water access (sold at 300% markup)

Implementation Protocol:
- All Tier 3 distribution nodes must report "Maximum Stress" readings
- Public sensors at WFP-03 must display consistent "Critical Capacity" warnings
- Actual output figures are CLASSIFIED and not to be disclosed
- Media releases: "Water crisis continues - conservation mandatory"

═══════════════════════════════════════════════════════════════════

ACTION REQUIRED:

1. Sector Chief Kellar: Implement sensor manipulation protocol within 48 hours
2. Resource Management Division: Begin surplus rerouting immediately
3. Public Relations: Prepare "Water Conservation Success" narrative
4. Security Division: Monitor Tier 3 for any organized resistance
5. Compliance Division: Ensure all personnel understand this is NOT optional

═══════════════════════════════════════════════════════════════════

COMPLIANCE STATEMENT:

Profitability is the mandate. The economic stability of the ACC Directorate depends on maintaining resource scarcity while maximizing executive comfort and research capabilities. Any deviation from this directive will result in immediate disciplinary action.

This document is classified LEVEL 4. Unauthorized distribution is punishable by termination of employment and asset forfeiture.

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        '003': {
            name: 'FILE_003_ARCH_PLAN_SENTRY_REVISION.txt',
            content: `PROJECT NAME: SENTRY (Secure Neutralization & Containment Ring)
DATE: 09.11.2273
REVISION: 3.2 - URGENT SECURITY UPDATE
CLEARANCE: Level 4 (Urban Defense & Planning Committee)
AUTHORIZATION: Directorate Order 12-Gamma
CLASSIFICATION: LEVEL 4 - INFRASTRUCTURE SECURITY

═══════════════════════════════════════════════════════════════════

PROJECT OVERVIEW:

SENTRY represents the primary defensive perimeter surrounding Aethelburg's core sectors (Tiers 1-3). The system consists of a multi-layered containment wall designated "The Aegis," which serves both as physical barrier and psychological deterrent against unauthorized access and organized resistance.

═══════════════════════════════════════════════════════════════════

INITIAL DESIGN FLAW IDENTIFICATION:

The original perimeter wall architecture (approved 2268, implemented 2270) includes structurally integrated lower-level maintenance access points. These were originally intended for:

- Basic municipal services in Tier 4 Gutter Zones
- Emergency response access
- Waste management systems
- Utility maintenance crews
- Sanitation infrastructure

SECURITY ASSESSMENT (Date: 08.11.2273):

Recent intelligence reports indicate increasing organized resistance within Tier 4. Analysis of captured communications reveals:

- Resistance cells have mapped 67% of maintenance tunnel network
- Multiple unauthorized access attempts to Tier 3 infrastructure
- Evidence of weapon smuggling through maintenance routes
- Coordinated sabotage attempts on power distribution nodes
- Intelligence gathering operations targeting Tier 2 and Tier 3

THREAT LEVEL: CRITICAL

These access points are now deemed UNACCEPTABLE SECURITY RISKS.

═══════════════════════════════════════════════════════════════════

REVISED PLAN: SUB-SURFACE EXCLUSION PROTOCOL

All maintenance tunnels connecting Tier 3 to Tier 4 must be permanently sealed using the following specifications:

STRUCTURAL SEALING:
- Material: Reinforced Ceramic Polymer (SCP) - Grade 7
- Thickness: Minimum 2.5 meters per seal point
- Installation: Complete structural integration with existing wall
- Testing: Pressure resistance to 15,000 PSI minimum

EXPLOSIVE CHARGES:
- Type: Pressurized detonation units (PDU-44)
- Placement: 200-meter intervals along all tunnel networks
- Activation: Remote trigger capability from Central Security
- Purpose: Emergency demolition if structural integrity compromised
- Authorization: Directorate-level approval required for activation

═══════════════════════════════════════════════════════════════════

INFRASTRUCTURE IMPACT ANALYSIS:

RESULTING CONSEQUENCES FOR TIER 4:

1. PERMANENT POWER GRID DISCONNECTION
   - All Tier 4 sectors will lose access to main power distribution
   - Emergency backup systems will NOT be maintained
   - Estimated power loss: 100% within 72 hours of seal completion

2. SANITATION SYSTEM TERMINATION
   - All waste management infrastructure will be cut off
   - No access to water filtration systems
   - No access to sewage processing facilities
   - Estimated impact: Complete system failure within 14 days

3. EMERGENCY SERVICES CESSATION
   - Medical response teams will no longer have access
   - Fire suppression systems will be disconnected
   - Security patrols will be permanently withdrawn
   - Estimated impact: Immediate

4. COMMUNICATION NETWORK ISOLATION
   - All data networks will be severed
   - No access to emergency communication channels
   - Complete information blackout
   - Estimated impact: Immediate upon seal completion

═══════════════════════════════════════════════════════════════════

POPULATION IMPACT ASSESSMENT:

Current Tier 4 Population: Approximately 847,000 Unlicensed Resident Population (URP)

Projected Outcomes:
- Immediate mortality rate: 12-18% (due to medical emergency cutoff)
- 30-day mortality rate: 35-45% (due to sanitation failure and disease)
- 90-day mortality rate: 60-75% (due to resource depletion)
- Long-term survival: Estimated 15-25% (those who can establish independent resource acquisition)

COLLATERAL DAMAGE ASSESSMENT: ACCEPTABLE

═══════════════════════════════════════════════════════════════════

CONCLUSION:

Infrastructure damage to Tier 4 is acceptable collateral. The safety and security of the ACC Directorate, Tier 1-3 populations, and critical research facilities (including Project 01) outweighs the viability of the Unlicensed Resident Population.

The URP has demonstrated increasing hostility and organizational capability. Complete isolation is the only viable long-term security solution.

═══════════════════════════════════════════════════════════════════

IMPLEMENTATION TIMELINE:

- Phase 1 (Seal Installation): Begin 12.11.2273, Complete by 25.11.2273
- Phase 2 (Explosive Charge Placement): Begin 26.11.2273, Complete by 05.12.2273
- Phase 3 (System Disconnection): Begin 06.12.2273, Complete by 10.12.2273
- Phase 4 (Security Verification): Complete by 15.12.2273

MANDATORY COMPLETION DATE: Before next Lunar Cycle (18.12.2273)

Implementation must be COVERT. Public announcement: "Infrastructure maintenance and system upgrades - temporary service interruption."

═══════════════════════════════════════════════════════════════════

AUTHORIZATION:

This revision is approved by:
- Director F. Thorne (CEO)
- Chief Security Officer D. Solis
- Urban Planning Committee Chair

END OF DOCUMENT`
        },
        '004': {
            name: 'FILE_004_PSYCH_ASSESS_JADE_PROJECT01.txt',
            content: `PSYCHOLOGICAL ASSESSMENT LOG
PROJECT: 01 - JADE
SUBJECT: J-01 (Designation: "Jade")
ASSESSING PSYCHOLOGIST: Dr. S. Krell, ERD Behavioral Sciences Division
DATE: 21.03.2275
SESSION: 47-B
STATUS: ONGOING BEHAVIORAL DRIFT (HIGH PRIORITY)
CLASSIFICATION: LEVEL 5 - PROJECT 01 EYES ONLY

═══════════════════════════════════════════════════════════════════

SESSION FOCUS:

Evaluation of Subject's response to Isolation Conditioning Protocol 7 (ICP-7), specifically monitoring for signs of baseline consciousness re-emergence and latent memory recall.

═══════════════════════════════════════════════════════════════════

BEHAVIORAL OBSERVATIONS:

NON-VERBAL COMMUNICATION PATTERNS:

Subject J-01 has begun exhibiting increasingly complex non-verbal communication patterns toward the surrounding containment environment. Over the past 14 days, monitoring has revealed:

1. SYMBOLIC BEHAVIOR:
   - Subject has begun carving repeating geometric symbols into bioreactor cooling coils
   - Symbols appear to follow a consistent pattern (see attached diagram)
   - Carving implements: Subject's own fingernails (filed to sharp points)
   - Location: Primary cooling system, Sub-Level 12, ERD Research Complex
   - Frequency: 2-3 hours daily during "rest periods"

2. SYMBOL ANALYSIS:
   - Pattern Type: Interconnected geometric shapes
   - Complexity: High (suggests intentional design, not random)
   - Consistency: 94% pattern replication across multiple carving sessions
   - Interpretation: Subject appears to be creating a "map" or "diagram"

3. ENVIRONMENTAL INTERACTION:
   - Subject has stopped responding to standard conditioning stimuli
   - Reduced compliance with feeding protocols
   - Increased periods of focused attention on containment structure
   - Unusual vocalizations during carving sessions (unintelligible, possibly language-like)

═══════════════════════════════════════════════════════════════════

VERBAL LOG EXCERPT:

[Session 47-B, Timestamp: 14:32:18]

Dr. Krell: "Jade, can you tell me about the symbols you've been creating?"

Subject J-01: [3.2 second pause] "They are maps."

Dr. Krell: "Maps of what, Jade?"

Subject J-01: [2.8 second pause, direct eye contact - unusual] "They show where the sickness started, not where it ends."

Dr. Krell: "What sickness are you referring to?"

Subject J-01: [Extended pause, 12.4 seconds] "The one you made. The one that lives in me now. But I remember... before."

Dr. Krell: "Before what, Jade?"

Subject J-01: [Subject becomes agitated, containment systems register increased bio-readings] "Before you took my name. Before the needles. Before I became this."

[Session terminated - Subject required sedation]

═══════════════════════════════════════════════════════════════════

ANALYSIS:

CONSCIOUSNESS RECALL ASSESSMENT:

This verbal exchange suggests HIGH-LEVEL LATENT MEMORY RECALL with >95% confidence. Key indicators:

1. Subject references "before" - indicating pre-conditioning memory access
2. Subject demonstrates understanding of her transformation process
3. Subject shows awareness of her original identity (mentions "name")
4. Subject connects her current state to "sickness" - suggesting memory of pathogen introduction
5. Subject's statement "where the sickness started, not where it ends" implies:
   - Memory of initial infection event
   - Understanding of pathogen origin
   - Potential knowledge of broader contamination scope

CONDITIONING EFFECTIVENESS:

The conditioning protocols are FAILING to completely suppress the subject's baseline consciousness. Current assessment:

- ICP-7 Effectiveness: 23% (down from 67% in previous assessment)
- Baseline Consciousness Suppression: 34% (down from 78%)
- Memory Recall Probability: 87% (up from 12%)
- Compliance Rate: 41% (down from 89%)

═══════════════════════════════════════════════════════════════════

THREAT ASSESSMENT:

CRITICAL CONCERNS:

1. If Subject J-01 regains full memory of pathogen introduction event, she may:
   - Reveal ACC involvement in initial outbreak
   - Expose Project 01's true purpose
   - Compromise the "Natural Disaster" narrative
   - Potentially trigger subject non-compliance or escape attempts

2. Symbolic behavior suggests subject is attempting to:
   - Document her memories in permanent form
   - Communicate with potential observers
   - Create a record that survives conditioning protocols

3. Increasing consciousness levels may affect:
   - Symbiotic virus stability (R.V. A-01)
   - Research data integrity
   - Containment security
   - Project 01 viability

═══════════════════════════════════════════════════════════════════

RECOMMENDATION:

IMMEDIATE PROTOCOL ADJUSTMENT REQUIRED:

TEMPORARILY SUSPEND:
- All empathy-reduction drugs (Protocol HUSH)
- Current consciousness suppression medications
- Standard conditioning reinforcement schedules

REPLACE WITH:
- Aggressive compliance-inducing neurotoxins (Protocol LOCKDOWN)
- Increased dosage: 300% of standard baseline
- Administer: 3x daily (up from 1x)
- Target: Complete consciousness elimination, not just suppression

RATIONALE:

We need to CRUSH the consciousness, not just numb it. The current approach is allowing baseline personality and memory to re-emerge. Protocol LOCKDOWN is designed to achieve near-total cognitive suppression, reducing the subject to a purely reactive biological system.

RISKS:
- Potential impact on symbiotic virus research
- Possible reduction in subject viability
- Increased maintenance requirements
- Higher resource consumption

BENEFITS:
- Eliminates memory recall threat
- Prevents symbolic communication
- Ensures project security
- Maintains research asset stability

═══════════════════════════════════════════════════════════════════

URGENCY LEVEL: EXTREME

This assessment requires immediate Directorate review and authorization for Protocol LOCKDOWN implementation. Delay may result in complete conditioning failure and potential security breach.

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        '005': {
            name: 'FILE_005_SEC_INCIDENT_SECTOR_B9.txt',
            content: `SECURITY INCIDENT REPORT
REPORTING OFFICER: Captain D. Solis, Internal Security Division
DATE: 03.07.2274
INCIDENT TYPE: Unauthorized Data Extraction (Class Alpha-Prime)
LOCATION: ACC Central Archives, Vault 3-B
CLASSIFICATION: LEVEL 5 - DIRECTORATE EYES ONLY
INCIDENT ID: SEC-2274-0447

═══════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY:

A highly skilled intrusion team successfully breached Vault 3-B security protocols and extracted approximately 4 TB of encrypted pre-Collapse financial records before being neutralized. One data storage unit remains unaccounted for, creating a CRITICAL security threat to ACC operational security and public narrative control.

═══════════════════════════════════════════════════════════════════

INCIDENT TIMELINE:

22:14:32 - Security systems detect unauthorized access attempt at Vault 3-B entrance
22:15:47 - Intrusion team bypasses primary security protocols (method: [REDACTED])
22:16:12 - Vault 3-B door mechanisms compromised
22:17:03 - Intrusion team enters vault
22:18:45 - Data extraction begins (estimated 4 TB transferred)
22:19:12 - Security response team dispatched
22:20:34 - Intrusion team neutralized (4 operatives eliminated)
22:21:08 - Post-incident security sweep initiated
22:22:15 - Discovery: One data storage unit unaccounted for

═══════════════════════════════════════════════════════════════════

INTRUSION TEAM ANALYSIS:

OPERATIVE PROFILES (Post-Mortem):

Operative 1: [REDACTED] - Team Leader
- Equipment: Advanced hacking tools, military-grade weapons
- Skill Level: Professional (likely former ACC security personnel)
- Neutralization: Eliminated by security forces

Operative 2: [REDACTED] - Technical Specialist
- Equipment: Data extraction hardware, encryption bypass tools
- Skill Level: Expert (demonstrated knowledge of ACC systems)
- Neutralization: Eliminated by security forces

Operative 3: [REDACTED] - Security Override Specialist
- Equipment: Security protocol manipulation devices
- Skill Level: Professional
- Neutralization: Eliminated by security forces

Operative 4: [REDACTED] - Extraction Support
- Equipment: Data storage units, backup systems
- Skill Level: Professional
- Neutralization: Eliminated by security forces

AFFILIATION ASSESSMENT:

Evidence suggests the intrusion team was affiliated with organized resistance movements, possibly:
- Tier 4 Gutter Zone resistance cells
- Former ACC personnel (disgruntled employees)
- External organization with inside knowledge
- Combination of above

INVESTIGATION STATUS: ONGOING

═══════════════════════════════════════════════════════════════════

EXTRACTED DATA CONTENTS:

PRELIMINARY ANALYSIS:

The compromised data files detail the founding families of the ACC and their activities during the immediate post-Collapse period (2270-2272). Specific contents include:

1. FINANCIAL RECORDS:
   - Documentation of how founding families monopolized initial post-Collapse food shipments
   - Records of medicine distribution control and price manipulation
   - Evidence of resource hoarding during critical supply shortages
   - Financial transactions showing systematic exploitation of crisis conditions

2. FOUNDING FAMILY DOCUMENTATION:
   - Thorne Family: Initial food distribution monopoly
   - Vance Family: Medicine supply chain control
   - Kellar Family: Resource allocation manipulation
   - [REDACTED] Family: [REDACTED]
   - [REDACTED] Family: [REDACTED]

3. NARRATIVE DISCREPANCIES:
   - Evidence contradicting public "Benevolent Foundation" narrative
   - Documentation of intentional resource scarcity creation
   - Records of population control measures
   - Evidence of systematic wealth concentration

4. OPERATIONAL SECRETS:
   - Pre-Collapse planning documents
   - Crisis exploitation strategies
   - Population control protocols
   - Economic manipulation techniques

═══════════════════════════════════════════════════════════════════

MISSING DATA STORAGE UNIT:

STORAGE UNIT IDENTIFICATION:
- Designation: Ghost-Cipher
- Capacity: Estimated 500 GB
- Encryption: [REDACTED] level
- Contents: Unknown (possibly most critical files)

STATUS: UNACCOUNTED FOR

SEARCH EFFORTS:
- Vault 3-B: Complete sweep - NOT FOUND
- Security perimeter: Complete sweep - NOT FOUND
- Intrusion team remains: Searched - NOT FOUND
- Possible locations:
  * Removed by operative before neutralization
  * Hidden within facility
  * Transmitted to external location
  * Destroyed (unlikely - no evidence)

THREAT LEVEL: CRITICAL

═══════════════════════════════════════════════════════════════════

THREAT ASSESSMENT:

IF THIS INFORMATION IS RELEASED:

1. PUBLIC NARRATIVE COLLAPSE:
   - "Benevolent Foundation" story will be exposed as false
   - Public trust in ACC will be destroyed
   - Legitimacy of Directorate will be questioned

2. POPULATION RESPONSE:
   - Tier 3 population: Likely mass protests, possible organized resistance
   - Tier 4 population: Guaranteed violent insurrection
   - Tier 2 population: Potential defection from ACC support
   - Tier 1: Possible internal conflict

3. OPERATIONAL SECURITY:
   - Resource allocation systems may be challenged
   - Economic control mechanisms may be exposed
   - Security protocols may be compromised
   - Research projects (including Project 01) may be threatened

4. IMMEDIATE RISK:
   - Mass insurrection within 48-72 hours of information release
   - Potential collapse of ACC control structure
   - Possible external intervention
   - Complete system breakdown

═══════════════════════════════════════════════════════════════════

IMMEDIATE ACTION REQUIRED:

PROTOCOL BLANK SLATE - INITIATE IMMEDIATELY:

1. CITY-WIDE BLACKOUT:
   - All civilian network feeds: TERMINATE
   - Data access points: DISABLE
   - Communication systems: RESTRICT
   - Duration: Until chip is recovered or threat is neutralized

2. MEMORY WIPE PROTOCOL:
   - All civilian network feeds: Full memory wipe
   - Data access logs: PURGE
   - Communication records: DELETE
   - Public information systems: RESET

3. SEARCH OPERATIONS:
   - All Tier 3 and Tier 4 sectors: COMPLETE SEARCH
   - All resistance cells: INTERROGATE
   - All former ACC personnel: INVESTIGATE
   - All data transmission points: MONITOR

4. SECURITY MEASURES:
   - Increase security presence: 300%
   - Implement curfew: IMMEDIATE
   - Restrict movement between tiers: COMPLETE
   - Authorize use of force: LEVEL 5 CLEARANCE

═══════════════════════════════════════════════════════════════════

PRIORITY: FIND THE CHIP

All resources must be directed toward locating and recovering the Ghost-Cipher storage unit. Failure is not an option. The stability of the ACC depends on preventing this information from reaching the public.

═══════════════════════════════════════════════════════════════════

AUTHORIZATION:

This report has been reviewed by:
- Director F. Thorne (CEO)
- Chief Security Officer D. Solis
- Internal Security Division

Protocol BLANK SLATE: AUTHORIZED
Search Operations: AUTHORIZED
Use of Force: AUTHORIZED

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        '006': {
            name: 'FILE_006_INTERNAL_AUDIT_EXEC_SALARIES.txt',
            content: `INTERNAL AUDIT - ACC EXECUTIVE COMPENSATION
SECTION: Annual Compensation Review (Unaudited, Executive-Eyes Only)
FISCAL YEAR: 2274
CONFIDENTIALITY: ABSOLUTE
CLASSIFICATION: LEVEL 5 - DIRECTORATE MEMBERS ONLY
AUDIT DATE: [CLASSIFIED]
AUDITOR: [REDACTED]

═══════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY:

This document details the complete compensation structure for ACC Directorate members for Fiscal Year 2274. All figures represent both official salary payments and hidden bonus allocations through resource/asset transfers. This system effectively bypasses the City Charter's wealth caps while maintaining public compliance with stated income limitations.

═══════════════════════════════════════════════════════════════════

COMPENSATION BREAKDOWN:

┌─────────────────────────────────────────────────────────────────┐
│ DIRECTORATE MEMBER COMPENSATION - FISCAL YEAR 2274             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ DIRECTOR F. THORNE (CEO)                                       │
│ ─────────────────────────────────────────────────────────────── │
│ Official Annual Salary:         50,000,000 Standard Credits     │
│ Hidden Bonus Allocation:        100% of Rare Earth Mineral      │
│                                  Mine A-07 profits              │
│ Estimated Annual Value:         [REDACTED] Standard Credits    │
│                                                                 │
│ Purpose of Allocation:                                          │
│ - Maintaining proprietary research funding                     │
│   (Project 01, Project SENTRY, ERD Research Complex)           │
│ - Personal wealth accumulation                                 │
│ - Off-book financial operations                                │
│ - Crisis contingency funds                                     │
│                                                                 │
│ Asset Details:                                                 │
│ - Mine A-07: Exclusive ownership rights                        │
│ - Production: [REDACTED] tons/month                            │
│ - Market Value: [REDACTED] Standard Credits                    │
│ - Tax Status: Exempt (classified as "research funding")        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ COMPTROLLER R. VANCE                                           │
│ ─────────────────────────────────────────────────────────────── │
│ Official Annual Salary:         35,000,000 Standard Credits     │
│ Hidden Bonus Allocation:        Ownership of Tier 2 Habitat      │
│                                  Zoning Permits (Exclusive)     │
│ Estimated Annual Value:         [REDACTED] Standard Credits    │
│                                                                 │
│ Purpose of Allocation:                                          │
│ - Control of middle-class social mobility                      │
│ - Housing price manipulation                                   │
│ - Population control through residential access                │
│ - Personal real estate portfolio expansion                     │
│                                                                 │
│ Asset Details:                                                 │
│ - Tier 2 Zoning Permits: 100% control                          │
│ - Residential Units: [REDACTED] units under control             │
│ - Revenue Stream: Permit fees, rental income, resale profits    │
│ - Market Manipulation: Artificial scarcity creation            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ CHIEF T. KELLAR (Resource Management)                          │
│ ─────────────────────────────────────────────────────────────── │
│ Official Annual Salary:         28,000,000 Standard Credits     │
│ Hidden Bonus Allocation:        Exclusive right to Filtered      │
│                                  Air Vents B-1 to B-5           │
│ Estimated Annual Value:         [REDACTED] Standard Credits    │
│                                                                 │
│ Purpose of Allocation:                                          │
│ - Personal health maintenance                                  │
│ - Bio-safety protocols for family                              │
│ - Extended lifespan through air quality control                 │
│ - Protection from environmental contaminants                    │
│                                                                 │
│ Asset Details:                                                 │
│ - Air Vents B-1 to B-5: Exclusive access                       │
│ - Filtration Level: 99.97% particle removal                     │
│ - Coverage: Personal residence + extended family               │
│ - Public Access: DENIED (classified as "security measure")      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

ADDITIONAL DIRECTORATE MEMBERS:

[REDACTED] - Official Salary: [REDACTED]
            Hidden Allocation: [REDACTED]
            Purpose: [REDACTED]

[REDACTED] - Official Salary: [REDACTED]
            Hidden Allocation: [REDACTED]
            Purpose: [REDACTED]

[REDACTED] - Official Salary: [REDACTED]
            Hidden Allocation: [REDACTED]
            Purpose: [REDACTED]

═══════════════════════════════════════════════════════════════════

SYSTEM ANALYSIS:

WEALTH CAP BYPASS MECHANISM:

The City Charter (Section 44, Article 12) establishes maximum annual compensation limits for public officials. However, the current compensation structure utilizes "resource allocation" and "asset transfer" mechanisms that are classified as "operational necessities" rather than direct compensation.

LEGAL CLASSIFICATION:
- Official salaries: Public record, compliant with City Charter
- Hidden allocations: Classified as "resource management" and "infrastructure control"
- Tax Status: Hidden allocations are exempt from standard taxation
- Public Disclosure: NOT REQUIRED (classified information)

FINANCIAL STABILITY:

This compensation model ensures the Directorate remains financially decoupled from the stability of the standard economy. Key benefits:

1. Economic Independence:
   - Directorate wealth is not dependent on public economic health
   - Resource control provides guaranteed income streams
   - Asset ownership creates long-term wealth accumulation

2. Political Stability:
   - Financial independence prevents external economic pressure
   - Resource control ensures continued operational capability
   - Wealth accumulation secures long-term power structure

3. Operational Security:
   - Off-book allocations are not subject to public scrutiny
   - Classified status prevents investigation
   - Resource control provides leverage over potential threats

═══════════════════════════════════════════════════════════════════

AUDIT FINDINGS:

POSITIVE ASSESSMENT:

1. Financial Model: STABLE and SUSTAINABLE
2. Legal Compliance: TECHNICALLY COMPLIANT (through classification)
3. Operational Security: MAINTAINED
4. Wealth Accumulation: SUCCESSFUL
5. Public Perception: CONTROLLED

RECOMMENDATIONS:

1. Continue current compensation structure
2. Expand resource allocation opportunities
3. Maintain classification status
4. Defend system against any investigation attempts
5. Increase hidden allocation values by 15% for FY 2275

═══════════════════════════════════════════════════════════════════

CONCLUSION:

This compensation model is financially stable, politically sound, and operationally secure. It must be VIGOROUSLY DEFENDED at all costs. Any attempt to expose or challenge this system must be met with immediate and decisive action.

The Directorate's continued control depends on maintaining this financial independence and resource control structure.

═══════════════════════════════════════════════════════════════════

CONFIDENTIALITY NOTICE:

This document is ABSOLUTE CONFIDENTIALITY. Unauthorized access, distribution, or disclosure is punishable by:
- Immediate termination of employment
- Complete asset forfeiture
- Permanent exile to Tier 4
- Possible termination (physical)

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        '007': {
            name: 'FILE_007_BIOHAZARD_ERD_LAB_BREACH.txt',
            content: `BIO-HAZARD ALERT
ALERT LEVEL: EXTREME (Immediate Containment Required)
DATE: 05.06.2275 (02:15 hours)
LOCATION: ERD Research Complex, Biological Sequestration Unit 4
INCIDENT ID: BIO-2275-001
CLASSIFICATION: LEVEL 5 - PROJECT 01 EYES ONLY
REPORTING OFFICER: Dr. M. Chen, ERD Biological Safety Division

═══════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY:

An accidental release of Pathogen Omega (P-Omega) has occurred in Biological Sequestration Unit 4. Initial containment protocols have FAILED. The air filtration system in Sub-Level 12 (where Project 01: Jade is housed) has been contaminated. This creates an EXTREME risk of P-Omega coming into contact with Subject J-01's symbiotic virus (R.V. A-01), which could result in the creation of an unstable, contagious bioweapon.

═══════════════════════════════════════════════════════════════════

PATHOGEN PROFILE: PATHOGEN OMEGA (P-OMEGA)

ORIGIN:
P-Omega is the virulent, unstable precursor strain used in the development of the benign symbiotic virus R.V. A-01, which is currently carried by Subject J-01 (Project 01: Jade).

CHARACTERISTICS:
- Virulence: EXTREME
- Stability: UNSTABLE (mutates rapidly)
- Transmission: Airborne, contact, fluid exchange
- Incubation: 2-6 hours
- Mortality Rate: 94-97% (depending on individual immune response)

SYMPTOMS:
1. Initial Phase (0-2 hours):
   - Severe headache
   - High fever (40-42°C)
   - Muscle spasms
   - Cognitive disorientation

2. Acute Phase (2-4 hours):
   - Rapid neurological decay
   - Loss of motor control
   - Hyper-aggressive behavior
   - Hallucinations
   - Paranoia

3. Terminal Phase (4-6 hours):
   - Complete neurological breakdown
   - Organ failure
   - Death

BEHAVIORAL IMPACT:
Subjects infected with P-Omega become hyper-aggressive and demonstrate:
- Extreme violence toward others
- Inability to recognize familiar individuals
- Complete loss of empathy
- Destructive behavior patterns
- Potential for rapid spread through violent contact

═══════════════════════════════════════════════════════════════════

INCIDENT DETAILS:

TIMELINE:

02:15:18 - Containment breach detected in Unit 4
02:15:32 - Automatic containment protocols activated
02:16:04 - Containment protocols FAILED
02:16:15 - P-Omega release confirmed
02:16:45 - Air filtration system contamination detected
02:17:12 - Sub-Level 12 contamination confirmed
02:17:30 - Emergency protocols initiated
02:18:00 - Project 01 containment status: AT RISK

BREACH CAUSE:
- Equipment failure in Unit 4 primary containment system
- Backup systems: FAILED to activate
- Safety protocols: INSUFFICIENT for P-Omega stability
- Human error: [REDACTED] (under investigation)

CONTAINMENT STATUS:

INITIAL CONTAINMENT: FAILED
- Unit 4: COMPROMISED
- Air filtration system: CONTAMINATED
- Sub-Level 12: CONTAMINATED
- Project 01 containment: INTEGRITY MAINTAINED (temporary)

COMPROMISED MATERIALS:
- Estimated 12 vials of P-Omega (concentrated)
- Total volume: Approximately 240 ml
- Concentration: [REDACTED] viral particles per ml
- Dispersal: Airborne throughout Unit 4 and Sub-Level 12

═══════════════════════════════════════════════════════════════════

CRITICAL THREAT ASSESSMENT:

PRIMARY CONCERN: PROJECT 01 CONTAMINATION

Subject J-01 (Jade) currently carries the benign symbiotic virus R.V. A-01. If P-Omega comes into contact with R.V. A-01, the following scenarios are possible:

SCENARIO 1: VIRAL RECOMBINATION (HIGH PROBABILITY)
- P-Omega and R.V. A-01 combine to create new viral strain
- Result: Unstable, highly contagious bioweapon
- Characteristics: Combines P-Omega's virulence with R.V. A-01's stability
- Transmission: Enhanced (airborne + contact + fluid)
- Mortality: Estimated 85-95%
- Containment: EXTREMELY DIFFICULT

SCENARIO 2: VIRAL MUTATION (MEDIUM PROBABILITY)
- R.V. A-01 mutates in response to P-Omega exposure
- Result: Loss of benign characteristics, gain of virulence
- Characteristics: Unpredictable mutation pattern
- Transmission: Unknown
- Mortality: Unknown (potentially extreme)
- Containment: UNKNOWN

SCENARIO 3: SUBJECT DEATH (LOW PROBABILITY)
- P-Omega directly infects Subject J-01
- Result: Subject death, loss of research asset
- Impact: Project 01 failure, research data loss
- Containment: Achieved through subject termination

═══════════════════════════════════════════════════════════════════

IMMEDIATE PROTOCOL: GOLIATH

PROTOCOL GOLIATH - MANDATORY EXECUTION:

1. IMMEDIATE ISOLATION:
   - Sub-Level 12: COMPLETE ISOLATION
   - All access points: SEALED
   - All personnel: EVACUATED (except essential)
   - Communication: RESTRICTED

2. CONTAINMENT MEASURES:
   - Air filtration: EMERGENCY SHUTDOWN
   - Backup systems: ACTIVATED
   - Secondary containment: DEPLOYED
   - Monitoring: 24/7 surveillance

3. ARMED PERSONNEL PREPARATION:
   - All security personnel: ARMED and READY
   - Weapons: Authorized for use
   - Authorization: Level 5 clearance
   - Target: Subject J-01 (if contamination confirmed)

4. EXTERMINATION PROTOCOL PREPARATION:
   - If Subject J-01 shows ANY signs of P-Omega integration:
     * Immediate termination authorized
     * Complete facility sterilization
     * All personnel: Quarantine protocol
     * Research data: Secure backup before termination

═══════════════════════════════════════════════════════════════════

RISK ASSESSMENT:

ASSET LOSS vs. BIOWEAPON CREATION:

LOSS OF PROJECT 01 ASSET:
- Research data loss: SIGNIFICANT
- Financial impact: [REDACTED] Standard Credits
- Timeline setback: 3-5 years
- Acceptable: YES (if necessary to prevent bioweapon creation)

BIOWEAPON CREATION:
- Potential mortality: MILLIONS
- Containment difficulty: EXTREME
- Long-term threat: CATASTROPHIC
- Acceptable: NO (under any circumstances)

CONCLUSION:

Loss of the Project 01 asset is PREFERABLE to an unstable, contagious bioweapon. If Subject J-01 shows ANY signs of P-Omega integration, immediate termination is MANDATORY.

═══════════════════════════════════════════════════════════════════

MONITORING PROTOCOL:

Subject J-01 must be monitored continuously for:
- Signs of P-Omega infection
- Changes in biological readings
- Behavioral abnormalities
- Viral activity indicators
- Any indication of contamination

Monitoring Frequency: Every 15 minutes
Reporting: Immediate (any changes)
Decision Authority: Director F. Thorne (CEO)

═══════════════════════════════════════════════════════════════════

AUTHORIZATION:

Protocol GOLIATH: AUTHORIZED
Extermination Protocol: AUTHORIZED (if necessary)
Use of Force: AUTHORIZED
Facility Sterilization: AUTHORIZED

This incident requires immediate Directorate attention. All resources must be directed toward containment and prevention of bioweapon creation.

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        }
    };
    
    // File click handler
    document.querySelectorAll('.file-item').forEach(item => {
        item.addEventListener('click', function() {
            const fileId = this.getAttribute('data-file');
            if (fileContents[fileId]) {
                const file = fileContents[fileId];
                viewerFileName.textContent = file.name;
                viewerBody.innerHTML = `<div class="file-content">${file.content}</div>`;
                fileViewer.classList.remove('hidden');
                
                // Add terminal log
                if (terminalBody && cursor) {
                    const logLine = document.createElement('div');
                    logLine.className = 'terminal-line';
                    logLine.innerHTML = `<span class="output">[SYSTEM] File accessed: ${file.name}</span>`;
                    terminalBody.insertBefore(logLine, cursor.parentElement);
                }
            }
        });
    });
    
    // Close viewer
    closeViewer.addEventListener('click', function() {
        fileViewer.classList.add('hidden');
    });
    
    // Close on overlay click
    document.querySelector('.viewer-overlay').addEventListener('click', function() {
        fileViewer.classList.add('hidden');
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !fileViewer.classList.contains('hidden')) {
            fileViewer.classList.add('hidden');
        }
    });
});

// Add subtle glitch effect on hover for redacted text
document.querySelectorAll('.redacted').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});

// Side Panel Animations
document.addEventListener('DOMContentLoaded', function() {
    // Update time display
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const lastUpdate = document.getElementById('lastUpdate');
        if (lastUpdate) {
            lastUpdate.textContent = timeString;
        }
    }
    
    updateTime();
    setInterval(updateTime, 1000);
    
    // Animate status bars
    function animateStatusBars() {
        const fills = document.querySelectorAll('.indicator-fill');
        fills.forEach(fill => {
            const currentWidth = parseFloat(fill.style.width) || parseFloat(window.getComputedStyle(fill).width);
            const targetWidth = fill.classList.contains('security-fill') ? 98 :
                               fill.classList.contains('network-fill') ? 100 :
                               fill.classList.contains('processing-fill') ? 87 : 73;
            
            // Add slight random variation
            const variation = Math.random() * 3 - 1.5;
            const newWidth = Math.max(0, Math.min(100, targetWidth + variation));
            fill.style.width = newWidth + '%';
        });
    }
    
    // Initial animation
    setTimeout(() => {
        const fills = document.querySelectorAll('.indicator-fill');
        fills.forEach((fill, index) => {
            fill.style.width = '0%';
            setTimeout(() => {
                const targetWidth = fill.classList.contains('security-fill') ? 98 :
                                   fill.classList.contains('network-fill') ? 100 :
                                   fill.classList.contains('processing-fill') ? 87 : 73;
                fill.style.transition = 'width 2s ease-out';
                fill.style.width = targetWidth + '%';
            }, index * 200);
        });
    }, 500);
    
    // Update status bars periodically
    setInterval(animateStatusBars, 3000);
    
    // Randomize active users display
    function updateActiveUsers() {
        const activeUsers = document.getElementById('activeUsers');
        if (activeUsers) {
            const base = Math.floor(Math.random() * 50) + 20;
            activeUsers.textContent = `[${base}]`;
        }
    }
    
    updateActiveUsers();
    setInterval(updateActiveUsers, 5000);
    
    // Add more data stream lines dynamically
    const dataStream = document.getElementById('leftDataStream');
    if (dataStream) {
        const streamMessages = [
            '[SYSTEM] Monitoring active...',
            '[SECURITY] All protocols operational',
            '[NETWORK] Connection stable',
            '[AUDIT] Access logs updated',
            '[SCAN] Threat detection: CLEAR',
            '[DATA] Processing queue: 12 items',
            '[BACKUP] Archive sync complete',
            '[ALERT] System integrity verified',
            '[LOG] 1,247 entries processed',
            '[STATUS] All systems nominal'
        ];
        
        // Duplicate messages for continuous scroll
        streamMessages.forEach(msg => {
            const line = document.createElement('div');
            line.className = 'stream-line';
            line.textContent = msg;
            dataStream.appendChild(line);
        });
    }
});

// Add CSS for glitch animation
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(style);

// Security System Alerts
document.addEventListener('DOMContentLoaded', function() {
    const alertsContainer = document.getElementById('securityAlertsContainer');
    if (!alertsContainer) return;
    
    const alertMessages = [
        "Multiple unauthorized pings detected.",
        "Firewall strain 67% – rerouting data stream.",
        "Backup power grid activated.",
        "Intrusion attempt logged. Tracing source...",
        "Network anomaly detected in Sector 7.",
        "Encryption protocol compromised. Initiating countermeasures.",
        "Unauthorized access attempt from IP: [REDACTED]",
        "System integrity check failed. Running diagnostics...",
        "Data breach attempt blocked. Threat level: HIGH",
        "Perimeter sensors triggered. Scanning for threats...",
        "Critical system overload. Switching to backup servers.",
        "Malware signature detected. Quarantine protocol active.",
        "Security clearance violation. Access denied.",
        "Emergency protocols activated. All non-essential systems offline.",
        "Biometric scan required. Identity verification pending."
    ];
    
    const alertPriorities = ['CRITICAL', 'HIGH', 'MEDIUM', 'WARNING', 'ALERT'];
    
    const alertPositions = ['center', 'top', 'bottom', 'left', 'right'];
    
    let activeAlerts = 0;
    const maxAlerts = 3;
    
    function createSecurityAlert() {
        if (activeAlerts >= maxAlerts) return;
        
        activeAlerts++;
        
        const alert = document.createElement('div');
        alert.className = 'security-alert';
        
        // Random position
        const position = alertPositions[Math.floor(Math.random() * alertPositions.length)];
        if (position !== 'center') {
            alert.classList.add(`position-${position}`);
        }
        
        // Random message
        const message = alertMessages[Math.floor(Math.random() * alertMessages.length)];
        const priority = alertPriorities[Math.floor(Math.random() * alertPriorities.length)];
        
        // Get current time
        const now = new Date();
        const timestamp = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        
        alert.innerHTML = `
            <div class="security-alert-header">
                <div class="security-alert-title">SECURITY ALERT</div>
                <button class="security-alert-close" aria-label="Close alert">✖</button>
            </div>
            <div class="security-alert-message">${message}</div>
            <div class="security-alert-footer">
                <span class="security-alert-timestamp">${timestamp}</span>
                <span class="security-alert-priority">${priority}</span>
            </div>
        `;
        
        alertsContainer.appendChild(alert);
        
        // Play glitch sound on appearance
        const glitchSound = document.getElementById('glitchSound');
        if (glitchSound) {
            glitchSound.currentTime = 0;
            glitchSound.volume = 0.5;
            glitchSound.play().catch(e => console.log('Glitch sound play failed:', e));
        }
        
        // Trigger appearance animation
        setTimeout(() => {
            alert.classList.add('showing');
        }, 10);
        
        // Close button functionality
        const closeBtn = alert.querySelector('.security-alert-close');
        closeBtn.addEventListener('click', () => {
            // Play glitch sound on close
            if (glitchSound) {
                glitchSound.currentTime = 0;
                glitchSound.volume = 0.5;
                glitchSound.play().catch(e => console.log('Glitch sound play failed:', e));
            }
            closeAlert(alert);
        });
        
        // Auto-close after 8-15 seconds
        const autoCloseDelay = 8000 + Math.random() * 7000;
        setTimeout(() => {
            if (alert.parentNode) {
                closeAlert(alert);
            }
        }, autoCloseDelay);
    }
    
    function closeAlert(alert) {
        if (!alert.parentNode) return;
        
        alert.classList.remove('showing');
        alert.classList.add('hiding');
        
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
                activeAlerts--;
            }
        }, 600);
    }
    
    // Wait for loading screen to finish before showing alerts
    setTimeout(() => {
        // Initial delay before first alert (reduced to 3-5 seconds)
        const initialDelay = 3000 + Math.random() * 2000;
        
        setTimeout(() => {
            // Create first alert
            createSecurityAlert();
            
            // Schedule next alert
            function scheduleNextAlert() {
                const delay = 8000 + Math.random() * 12000; // 8-20 seconds between alerts
                setTimeout(() => {
                    createSecurityAlert();
                    scheduleNextAlert();
                }, delay);
            }
            
            scheduleNextAlert();
        }, initialDelay);
    }, 15000); // Wait 15 seconds after page load (after loading screen)
});

// 3D City View
document.addEventListener('DOMContentLoaded', function() {
    const cityViewButton = document.getElementById('cityViewButton');
    const cityViewScreen = document.getElementById('cityViewScreen');
    const cityViewClose = document.getElementById('cityViewClose');
    const cityCanvas = document.getElementById('cityCanvas');
    
    if (!cityViewButton || !cityViewScreen || !cityViewClose || !cityCanvas) return;
    
    let scene, camera, renderer;
    let cityMesh;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationX = 0;
    let rotationY = 0;
    let zoom = 50;
    
    // Initialize Three.js scene
    function initCityScene() {
        // Scene
        scene = new THREE.Scene();
        
        // Tech-style gradient background
        const gradientTexture = createGradientTexture();
        scene.background = gradientTexture;
        
        // Softer fog
        scene.fog = new THREE.Fog(0x0a0a1a, 30, 150);
        
        // Camera
        camera = new THREE.PerspectiveCamera(75, cityCanvas.clientWidth / cityCanvas.clientHeight, 0.1, 1000);
        camera.position.set(0, 30, 50);
        camera.lookAt(0, 0, 0);
        
        // Renderer
        renderer = new THREE.WebGLRenderer({ canvas: cityCanvas, antialias: true });
        // Get actual container dimensions (use window size if canvas not yet sized)
        const container = cityCanvas.parentElement;
        const width = container ? container.clientWidth : window.innerWidth;
        const height = container ? container.clientHeight : window.innerHeight;
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Update camera aspect ratio
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        // Softer, more realistic lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        scene.add(ambientLight);
        
        // Main directional light (like sun)
        const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight1.position.set(30, 60, 30);
        scene.add(directionalLight1);
        
        // Accent lights (softer)
        const directionalLight2 = new THREE.DirectionalLight(0x4444ff, 0.3);
        directionalLight2.position.set(-20, 40, -20);
        scene.add(directionalLight2);
        
        const directionalLight3 = new THREE.DirectionalLight(0xff4444, 0.2);
        directionalLight3.position.set(20, 30, -30);
        scene.add(directionalLight3);
        
        // Add tech grid backdrop
        createTechBackdrop();
        
        // Create low poly city
        createLowPolyCity();
        
        // Mouse controls
        setupControls();
        
        // Start animation loop
        animate();
    }
    
    function createGradientTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        
        // Create radial gradient (dark blue/purple to darker)
        const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, '#0a0a2a');
        gradient.addColorStop(0.5, '#1a1a3a');
        gradient.addColorStop(1, '#0a0a1a');
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, 256, 256);
        
        // Add grid pattern overlay
        context.strokeStyle = 'rgba(0, 100, 200, 0.1)';
        context.lineWidth = 1;
        for (let i = 0; i < 256; i += 16) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, 256);
            context.stroke();
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(256, i);
            context.stroke();
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        return texture;
    }
    
    function createTechBackdrop() {
        // Create a large plane behind the city with tech pattern
        const backdropGeometry = new THREE.PlaneGeometry(200, 200, 20, 20);
        const backdropMaterial = new THREE.MeshBasicMaterial({
            color: 0x0a0a2a,
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        const backdrop = new THREE.Mesh(backdropGeometry, backdropMaterial);
        backdrop.rotation.x = -Math.PI / 2;
        backdrop.position.y = -10;
        backdrop.position.z = -50;
        scene.add(backdrop);
        
        // Add some distant tech elements
        for (let i = 0; i < 20; i++) {
            const techGeometry = new THREE.BoxGeometry(2, 20, 2);
            const techMaterial = new THREE.MeshBasicMaterial({
                color: 0x0044aa,
                transparent: true,
                opacity: 0.2
            });
            const techElement = new THREE.Mesh(techGeometry, techMaterial);
            techElement.position.set(
                (Math.random() - 0.5) * 150,
                10,
                -80 - Math.random() * 50
            );
            scene.add(techElement);
        }
    }
    
    function createLowPolyCity() {
        const cityGroup = new THREE.Group();
        const radius = 50;
        const centerHeight = 35;
        const rings = 12;
        const buildingsPerRing = [1, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88];
        
        // Center building cluster (tallest) - exaggerated, stylized skyscrapers
        const centerClusterCount = 8;
        for (let c = 0; c < centerClusterCount; c++) {
            const centerOffset = c * 2.5;
            const buildingHeight = centerHeight * (1.0 + Math.random() * 0.8);
            const buildingWidth = 2.5 + Math.random() * 2;
            const buildingDepth = 2.5 + Math.random() * 2;
            
            // Create stylized buildings with interesting shapes
            let centerGeometry;
            const styleType = Math.random();
            
            if (styleType < 0.4) {
                // Tapered skyscraper (wider at bottom)
                const topWidth = buildingWidth * (0.6 + Math.random() * 0.2);
                centerGeometry = new THREE.CylinderGeometry(
                    topWidth * 0.7, 
                    buildingWidth * 0.7, 
                    buildingHeight, 
                    8
                );
            } else if (styleType < 0.7) {
                // Stepped building (like a ziggurat)
                centerGeometry = new THREE.BoxGeometry(buildingWidth, buildingHeight, buildingDepth);
            } else {
                // Twisted/angled building
                centerGeometry = new THREE.BoxGeometry(buildingWidth, buildingHeight, buildingDepth);
            }
            
            const centerMaterial = new THREE.MeshPhongMaterial({ 
                color: new THREE.Color().setHSL(0.05, 0.6, 0.25 + Math.random() * 0.25),
                emissive: new THREE.Color().setHSL(0.05, 0.4, 0.08 + Math.random() * 0.05),
                flatShading: true
            });
            const centerBuilding = new THREE.Mesh(centerGeometry, centerMaterial);
            const angle = (c / centerClusterCount) * Math.PI * 2;
            centerBuilding.position.set(
                Math.cos(angle) * centerOffset, 
                buildingHeight / 2, 
                Math.sin(angle) * centerOffset
            );
            
            // Add rotation for some buildings
            if (styleType > 0.7) {
                centerBuilding.rotation.y = Math.random() * 0.3;
            }
            
            cityGroup.add(centerBuilding);
            
            // Add some decorative elements (smaller structures on top)
            if (Math.random() > 0.6) {
                const topStructure = new THREE.BoxGeometry(
                    buildingWidth * 0.5, 
                    buildingHeight * 0.15, 
                    buildingDepth * 0.5
                );
                const topMaterial = new THREE.MeshPhongMaterial({
                    color: new THREE.Color().setHSL(0.05, 0.5, 0.4),
                    emissive: new THREE.Color().setHSL(0.05, 0.3, 0.1),
                    flatShading: true
                });
                const top = new THREE.Mesh(topStructure, topMaterial);
                top.position.set(
                    Math.cos(angle) * centerOffset,
                    buildingHeight + buildingHeight * 0.075,
                    Math.sin(angle) * centerOffset
                );
                cityGroup.add(top);
            }
        }
        
        // Create rings of buildings - much more crowded
        for (let ring = 0; ring < rings; ring++) {
            const ringRadius = (ring + 1) * (radius / rings);
            const buildingCount = buildingsPerRing[ring] || (ring + 1) * 8;
            const heightMultiplier = 1 - (ring / rings) * 0.75;
            const baseHeight = centerHeight * heightMultiplier;
            
            // Add multiple layers per ring for density
            const layersPerRing = ring < 3 ? 2 : (ring < 6 ? 1.5 : 1);
            const totalBuildings = Math.floor(buildingCount * layersPerRing);
            
            for (let i = 0; i < totalBuildings; i++) {
                // Vary the radius slightly for each building to create density
                const radiusVariation = (Math.random() - 0.5) * (radius / rings) * 0.6;
                const actualRadius = ringRadius + radiusVariation;
                
                const angle = (i / totalBuildings) * Math.PI * 2 + Math.random() * 0.3;
                const x = Math.cos(angle) * actualRadius;
                const z = Math.sin(angle) * actualRadius;
                
                // Random height variation - more variation
                const heightVariation = 0.5 + Math.random() * 0.8;
                const buildingHeight = baseHeight * heightVariation;
                
                // Random size - more realistic proportions
                const width = 0.8 + Math.random() * 1.2;
                const depth = 0.8 + Math.random() * 1.2;
                
                // Create stylized, exaggerated city buildings
                let buildingGeometry;
                const buildingType = Math.random();
                
                if (buildingType < 0.5) {
                    // Rectangular skyscrapers with variation
                    buildingGeometry = new THREE.BoxGeometry(width, buildingHeight, depth);
                } else if (buildingType < 0.7) {
                    // Tapered buildings (wider at bottom or top)
                    const taperDirection = Math.random();
                    if (taperDirection > 0.5) {
                        // Wider at bottom
                        buildingGeometry = new THREE.CylinderGeometry(
                            width * 0.6, 
                            width * 0.8, 
                            buildingHeight, 
                            6 + Math.floor(Math.random() * 4)
                        );
                    } else {
                        // Wider at top
                        buildingGeometry = new THREE.CylinderGeometry(
                            width * 0.8, 
                            width * 0.6, 
                            buildingHeight, 
                            6 + Math.floor(Math.random() * 4)
                        );
                    }
                } else if (buildingType < 0.85) {
                    // Cylindrical buildings
                    buildingGeometry = new THREE.CylinderGeometry(
                        width * 0.7, 
                        width * 0.7, 
                        buildingHeight, 
                        6 + Math.floor(Math.random() * 6)
                    );
                } else if (buildingType < 0.95) {
                    // Hexagonal/octagonal buildings
                    const sides = 6 + Math.floor(Math.random() * 3) * 2; // 6, 8, or 10 sides
                    buildingGeometry = new THREE.CylinderGeometry(
                        width * 0.7, 
                        width * 0.7, 
                        buildingHeight, 
                        sides
                    );
                } else {
                    // Unique cone/pyramid shapes
                    buildingGeometry = new THREE.ConeGeometry(
                        width * 0.8, 
                        buildingHeight, 
                        4 + Math.floor(Math.random() * 4)
                    );
                }
                
                // Softer, more realistic colors (grays, blues, warm tones)
                const colorMix = ring / rings;
                let baseColor;
                if (colorMix < 0.3) {
                    // Center: warm grays and browns
                    baseColor = new THREE.Color().setHSL(0.08, 0.3, 0.2 + Math.random() * 0.2);
                } else if (colorMix < 0.6) {
                    // Mid: cool grays and blues
                    baseColor = new THREE.Color().setHSL(0.55, 0.2, 0.25 + Math.random() * 0.2);
                } else {
                    // Outer: darker grays
                    baseColor = new THREE.Color().setHSL(0.6, 0.1, 0.15 + Math.random() * 0.15);
                }
                
                const buildingMaterial = new THREE.MeshPhongMaterial({ 
                    color: baseColor,
                    emissive: baseColor.clone().multiplyScalar(0.05),
                    flatShading: true
                });
                
                const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
                building.position.set(x, buildingHeight / 2, z);
                building.rotation.y = Math.random() * Math.PI * 2;
                
                // Add slight tilt to some buildings for style
                if (Math.random() > 0.8) {
                    building.rotation.z = (Math.random() - 0.5) * 0.1;
                    building.rotation.x = (Math.random() - 0.5) * 0.1;
                }
                
                cityGroup.add(building);
                
                // Add small decorative elements to some buildings
                if (Math.random() > 0.85 && buildingHeight > 5) {
                    const decorationType = Math.random();
                    if (decorationType < 0.5) {
                        // Small structure on top
                        const topDeco = new THREE.BoxGeometry(
                            width * 0.4, 
                            buildingHeight * 0.1, 
                            depth * 0.4
                        );
                        const decoMaterial = new THREE.MeshPhongMaterial({
                            color: baseColor.clone().multiplyScalar(1.2),
                            emissive: baseColor.clone().multiplyScalar(0.1),
                            flatShading: true
                        });
                        const deco = new THREE.Mesh(topDeco, decoMaterial);
                        deco.position.set(x, buildingHeight + buildingHeight * 0.05, z);
                        cityGroup.add(deco);
                    } else {
                        // Side attachment
                        const sideDeco = new THREE.BoxGeometry(
                            width * 0.3, 
                            buildingHeight * 0.4, 
                            depth * 0.2
                        );
                        const decoMaterial = new THREE.MeshPhongMaterial({
                            color: baseColor.clone().multiplyScalar(0.8),
                            emissive: baseColor.clone().multiplyScalar(0.05),
                            flatShading: true
                        });
                        const deco = new THREE.Mesh(sideDeco, decoMaterial);
                        const sideAngle = Math.random() * Math.PI * 2;
                        deco.position.set(
                            x + Math.cos(sideAngle) * width * 0.7,
                            buildingHeight * 0.3,
                            z + Math.sin(sideAngle) * depth * 0.7
                        );
                        cityGroup.add(deco);
                    }
                }
            }
        }
        
        // Add some random scattered buildings for extra density
        for (let i = 0; i < 150; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = 5 + Math.random() * (radius - 5);
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            
            // Check if too close to center cluster
            if (Math.sqrt(x * x + z * z) < 3) continue;
            
            const buildingHeight = 2 + Math.random() * (centerHeight * 0.5);
            const width = 0.5 + Math.random() * 0.8;
            const depth = 0.5 + Math.random() * 0.8;
            
            // Mostly rectangular buildings
            let buildingGeometry;
            if (Math.random() > 0.3) {
                buildingGeometry = new THREE.BoxGeometry(width, buildingHeight, depth);
            } else {
                buildingGeometry = new THREE.CylinderGeometry(width * 0.7, width * 0.7, buildingHeight, 6);
            }
            
            // Softer colors
            const colorMix = distance / radius;
            let baseColor;
            if (colorMix < 0.5) {
                baseColor = new THREE.Color().setHSL(0.1, 0.2, 0.2 + Math.random() * 0.2);
            } else {
                baseColor = new THREE.Color().setHSL(0.6, 0.15, 0.15 + Math.random() * 0.15);
            }
            
            const buildingMaterial = new THREE.MeshPhongMaterial({ 
                color: baseColor,
                emissive: baseColor.clone().multiplyScalar(0.05),
                flatShading: true
            });
            
            const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
            building.position.set(x, buildingHeight / 2, z);
            building.rotation.y = Math.random() * Math.PI * 2;
            cityGroup.add(building);
        }
        
        // Ground plane - softer, darker
        const groundGeometry = new THREE.CircleGeometry(radius + 10, 32);
        const groundMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x0a0a1a,
            emissive: 0x000000,
            flatShading: true
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        cityGroup.add(ground);
        
        // Small ruined buildings outside the wall
        const ruinsOutsideWall = 80;
        for (let i = 0; i < ruinsOutsideWall; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = (radius + 8) + 2 + Math.random() * 25; // Outside the wall
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            
            // Small ruined building heights (much shorter)
            const ruinHeight = 1 + Math.random() * 3;
            const ruinWidth = 0.4 + Math.random() * 0.8;
            const ruinDepth = 0.4 + Math.random() * 0.8;
            
            // Create ruined building (often broken/incomplete)
            let ruinGeometry;
            const ruinType = Math.random();
            
            if (ruinType < 0.6) {
                ruinGeometry = new THREE.BoxGeometry(ruinWidth, ruinHeight, ruinDepth);
            } else if (ruinType < 0.85) {
                ruinGeometry = new THREE.CylinderGeometry(
                    ruinWidth * 0.6, 
                    ruinWidth * 0.6, 
                    ruinHeight, 
                    6
                );
            } else {
                ruinGeometry = new THREE.ConeGeometry(
                    ruinWidth * 0.7, 
                    ruinHeight, 
                    4
                );
            }
            
            // Dark, weathered ruin colors
            const ruinColor = new THREE.Color().setHSL(
                0.1, 
                0.2, 
                0.1 + Math.random() * 0.1
            );
            
            const ruinMaterial = new THREE.MeshPhongMaterial({
                color: ruinColor,
                emissive: ruinColor.clone().multiplyScalar(0.02),
                flatShading: true
            });
            
            const ruin = new THREE.Mesh(ruinGeometry, ruinMaterial);
            ruin.position.set(x, ruinHeight / 2, z);
            ruin.rotation.y = Math.random() * Math.PI * 2;
            
            // Add some tilt/rotation to make them look more ruined
            if (Math.random() > 0.5) {
                ruin.rotation.x = (Math.random() - 0.5) * 0.3;
                ruin.rotation.z = (Math.random() - 0.5) * 0.3;
            }
            
            cityGroup.add(ruin);
            
            // Sometimes add a broken piece nearby
            if (Math.random() > 0.7) {
                const brokenPiece = new THREE.BoxGeometry(
                    ruinWidth * 0.5, 
                    ruinHeight * 0.3, 
                    ruinDepth * 0.5
                );
                const brokenMaterial = new THREE.MeshPhongMaterial({
                    color: ruinColor.clone().multiplyScalar(0.8),
                    emissive: ruinColor.clone().multiplyScalar(0.01),
                    flatShading: true
                });
                const piece = new THREE.Mesh(brokenPiece, brokenMaterial);
                piece.position.set(
                    x + (Math.random() - 0.5) * 2,
                    ruinHeight * 0.15,
                    z + (Math.random() - 0.5) * 2
                );
                piece.rotation.set(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                );
                cityGroup.add(piece);
            }
        }
        
        // Scattered ruins further out
        const scatteredRuins = 120;
        for (let i = 0; i < scatteredRuins; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = (radius + 8) + 15 + Math.random() * 40; // Further out
            const x = Math.cos(angle) * distance;
            const z = Math.sin(angle) * distance;
            
            // Even smaller scattered ruins
            const ruinHeight = 0.5 + Math.random() * 2.5;
            const ruinWidth = 0.3 + Math.random() * 0.6;
            const ruinDepth = 0.3 + Math.random() * 0.6;
            
            // Mostly small broken boxes
            let ruinGeometry;
            if (Math.random() > 0.3) {
                ruinGeometry = new THREE.BoxGeometry(ruinWidth, ruinHeight, ruinDepth);
            } else {
                ruinGeometry = new THREE.CylinderGeometry(
                    ruinWidth * 0.5, 
                    ruinWidth * 0.5, 
                    ruinHeight, 
                    4 + Math.floor(Math.random() * 3)
                );
            }
            
            // Very dark, weathered colors
            const ruinColor = new THREE.Color().setHSL(
                0.1, 
                0.15, 
                0.08 + Math.random() * 0.08
            );
            
            const ruinMaterial = new THREE.MeshPhongMaterial({
                color: ruinColor,
                emissive: ruinColor.clone().multiplyScalar(0.01),
                flatShading: true
            });
            
            const ruin = new THREE.Mesh(ruinGeometry, ruinMaterial);
            ruin.position.set(x, ruinHeight / 2, z);
            ruin.rotation.y = Math.random() * Math.PI * 2;
            
            // More tilt for scattered ruins
            ruin.rotation.x = (Math.random() - 0.5) * 0.4;
            ruin.rotation.z = (Math.random() - 0.5) * 0.4;
            
            cityGroup.add(ruin);
        }
        
        // City wall around perimeter
        const wallHeight = 12;
        const wallThickness = 1.5;
        const wallRadius = radius + 8;
        const wallSegments = 64;
        
        // Create wall segments for better control
        for (let i = 0; i < wallSegments; i++) {
            const angle1 = (i / wallSegments) * Math.PI * 2;
            const angle2 = ((i + 1) / wallSegments) * Math.PI * 2;
            
            const x1 = Math.cos(angle1) * wallRadius;
            const z1 = Math.sin(angle1) * wallRadius;
            const x2 = Math.cos(angle2) * wallRadius;
            const z2 = Math.sin(angle2) * wallRadius;
            
            // Create wall segment
            const wallSegmentGeometry = new THREE.BoxGeometry(
                Math.sqrt((x2 - x1) ** 2 + (z2 - z1) ** 2),
                wallHeight,
                wallThickness
            );
            
            const wallMaterial = new THREE.MeshPhongMaterial({
                color: new THREE.Color().setHSL(0.1, 0.3, 0.15 + Math.random() * 0.1),
                emissive: new THREE.Color().setHSL(0.1, 0.2, 0.02),
                flatShading: true
            });
            
            const wallSegment = new THREE.Mesh(wallSegmentGeometry, wallMaterial);
            
            // Position and rotate segment
            const midAngle = (angle1 + angle2) / 2;
            wallSegment.position.set(
                Math.cos(midAngle) * wallRadius,
                wallHeight / 2,
                Math.sin(midAngle) * wallRadius
            );
            wallSegment.rotation.y = midAngle + Math.PI / 2;
            
            cityGroup.add(wallSegment);
        }
        
        // Add wall top (crown/crenellation effect)
        for (let i = 0; i < wallSegments; i += 2) {
            const angle = (i / wallSegments) * Math.PI * 2;
            const segmentLength = (Math.PI * 2 * wallRadius) / wallSegments;
            
            const topGeometry = new THREE.BoxGeometry(
                segmentLength * 1.5,
                wallHeight * 0.3,
                wallThickness * 1.2
            );
            
            const topMaterial = new THREE.MeshPhongMaterial({
                color: new THREE.Color().setHSL(0.1, 0.4, 0.2),
                emissive: new THREE.Color().setHSL(0.1, 0.3, 0.03),
                flatShading: true
            });
            
            const top = new THREE.Mesh(topGeometry, topMaterial);
            top.position.set(
                Math.cos(angle) * wallRadius,
                wallHeight + wallHeight * 0.15,
                Math.sin(angle) * wallRadius
            );
            top.rotation.y = angle + Math.PI / 2;
            
            cityGroup.add(top);
        }
        
        scene.add(cityGroup);
        cityMesh = cityGroup;
    }
    
    function setupControls() {
        // Mouse drag rotation
        cityCanvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });
        
        cityCanvas.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousMousePosition.x;
                const deltaY = e.clientY - previousMousePosition.y;
                
                rotationY += deltaX * 0.01;
                rotationX += deltaY * 0.01;
                
                rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationX));
                
                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });
        
        cityCanvas.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        cityCanvas.addEventListener('mouseleave', () => {
            isDragging = false;
        });
        
        // Zoom with scroll
        cityCanvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            zoom += e.deltaY * 0.1;
            zoom = Math.max(20, Math.min(100, zoom));
        });
        
        // Touch controls for mobile
        let touchStartDistance = 0;
        let touchStartRotation = { x: rotationX, y: rotationY };
        
        cityCanvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
                touchStartRotation = { x: rotationX, y: rotationY };
            } else if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                touchStartDistance = Math.sqrt(dx * dx + dy * dy);
            }
        });
        
        cityCanvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (e.touches.length === 1 && isDragging) {
                const deltaX = e.touches[0].clientX - previousMousePosition.x;
                const deltaY = e.touches[0].clientY - previousMousePosition.y;
                
                rotationY = touchStartRotation.y + deltaX * 0.01;
                rotationX = touchStartRotation.x + deltaY * 0.01;
                
                rotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotationX));
            } else if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const scale = distance / touchStartDistance;
                zoom = Math.max(20, Math.min(100, zoom / scale));
                touchStartDistance = distance;
            }
        });
        
        cityCanvas.addEventListener('touchend', () => {
            isDragging = false;
        });
    }
    
    function animate() {
        requestAnimationFrame(animate);
        
        if (scene && camera && renderer && cityMesh && !cityViewScreen.classList.contains('hidden')) {
            // Update camera position based on rotation and zoom
            const x = Math.sin(rotationY) * Math.cos(rotationX) * zoom;
            const y = Math.sin(rotationX) * zoom + 20;
            const z = Math.cos(rotationY) * Math.cos(rotationX) * zoom;
            
            camera.position.set(x, y, z);
            camera.lookAt(0, 0, 0);
            
            // Rotate city slowly
            cityMesh.rotation.y += 0.001;
            
            renderer.render(scene, camera);
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (camera && renderer && !cityViewScreen.classList.contains('hidden')) {
            const container = cityCanvas.parentElement;
            const width = container ? container.clientWidth : window.innerWidth;
            const height = container ? container.clientHeight : window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
    });
    
    // City view glitch effect
    function triggerCityViewGlitch() {
        if (cityViewScreen.classList.contains('hidden')) return;
        
        cityCanvas.classList.add('city-glitch');
        const glitchSound = document.getElementById('glitchSound');
        if (glitchSound) {
            glitchSound.currentTime = 0;
            glitchSound.volume = 0.3;
            glitchSound.play().catch(e => console.log('Glitch sound play failed:', e));
        }
        
        setTimeout(() => {
            cityCanvas.classList.remove('city-glitch');
        }, 400);
    }
    
    // Random city view glitches (less frequent)
    let cityGlitchInterval;
    function startCityViewGlitches() {
        if (cityGlitchInterval) clearInterval(cityGlitchInterval);
        cityGlitchInterval = setInterval(() => {
            if (!cityViewScreen.classList.contains('hidden') && Math.random() > 0.7) {
                triggerCityViewGlitch();
            }
        }, 15000 + Math.random() * 20000); // Every 15-35 seconds
    }
    
    function stopCityViewGlitches() {
        if (cityGlitchInterval) {
            clearInterval(cityGlitchInterval);
            cityGlitchInterval = null;
        }
    }
    
    // Open city view
    cityViewButton.addEventListener('click', () => {
        cityViewScreen.classList.remove('hidden');
        startCityViewGlitches();
        
        // Wait a frame to ensure the screen is visible before initializing
        requestAnimationFrame(() => {
            if (!scene) {
                initCityScene();
            } else {
                // Resize if already initialized
                if (camera && renderer) {
                    const width = cityCanvas.clientWidth || window.innerWidth;
                    const height = cityCanvas.clientHeight || window.innerHeight;
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                    renderer.setSize(width, height);
                }
            }
        });
    });
    
    // Close city view
    cityViewClose.addEventListener('click', () => {
        cityViewScreen.classList.add('hidden');
        stopCityViewGlitches();
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !cityViewScreen.classList.contains('hidden')) {
            cityViewScreen.classList.add('hidden');
            stopCityViewGlitches();
        }
    });
});

