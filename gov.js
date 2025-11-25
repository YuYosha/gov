// Audio Preloading System
document.addEventListener('DOMContentLoaded', function() {
    // Preload all audio elements to ensure they're ready
    const audioElements = [
        'glitchSound', 'typingSound', 'backgroundMusic', 'alarmSound',
        'crashSound', 'powerSound', 'gasterSound', 'textSound'
    ];
    
    audioElements.forEach(audioId => {
        const audio = document.getElementById(audioId);
        if (audio) {
            // Force load by setting volume (triggers loading)
            audio.volume = audio.volume || 0.5;
            // Load the audio
            audio.load();
            
            // Handle loading errors
            audio.addEventListener('error', function() {
                console.warn(`Failed to load audio: ${audioId}`);
            });
            
            // Ensure audio is ready
            if (audio.readyState === 0) {
                audio.addEventListener('canplaythrough', function() {
                    // Audio is ready
                }, { once: true });
            }
        }
    });
});

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
            // Stop typing sound when loading screen leaves
            const typingSound = document.getElementById('typingSound');
            if (typingSound) {
                typingSound.pause();
                typingSound.currentTime = 0;
            }
            
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
    
    // Start typing sound when loading screen appears
    const typingSound = document.getElementById('typingSound');
    if (typingSound) {
        typingSound.loop = true;
        typingSound.volume = 0.4;
        typingSound.play().catch(() => {});
    }
});

// Random Glitch Effects on Main Screen - OPTIMIZED
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const cityViewScreen = document.getElementById('cityViewScreen');
    const glitchSound = document.getElementById('glitchSound');
    const glitchTypes = ['glitch-mild', 'glitch-medium', 'glitch-severe', 'glitch-extreme'];
    const glitchDurations = { 'glitch-mild': 600, 'glitch-medium': 1000, 'glitch-severe': 1500, 'glitch-extreme': 2000 };
    const glitchWeights = [0.4, 0.3, 0.2, 0.1];
    let isCityViewOpen = false;
    let isFileViewerOpen = false;
    
    // Update city view state when it changes
    if (cityViewScreen) {
        const observer = new MutationObserver(() => {
            isCityViewOpen = !cityViewScreen.classList.contains('hidden');
        });
        observer.observe(cityViewScreen, { attributes: true, attributeFilter: ['class'] });
        isCityViewOpen = !cityViewScreen.classList.contains('hidden');
    }
    
    function triggerRandomGlitch() {
        // Skip if Project 01 or Hidden Secret is active
        if (window.project01Active || window.hiddenSecretActive) return;
        
        // Skip if city view or file viewer is open (check directly)
        const fileViewerScreen = document.getElementById('fileViewerScreen');
        const fileViewerOpen = fileViewerScreen && fileViewerScreen.style.display !== 'none';
        if (isCityViewOpen || fileViewerOpen) return;
        
        // Remove any existing glitch classes
        document.body.classList.remove(...glitchTypes);
        
        // Random delay before applying glitch (0-100ms to avoid flicker)
        setTimeout(() => {
            // Weighted random selection
            let random = Math.random();
            let selectedType = 'glitch-mild';
            let cumulative = 0;
            
            for (let i = 0; i < glitchTypes.length; i++) {
                cumulative += glitchWeights[i];
                if (random <= cumulative) {
                    selectedType = glitchTypes[i];
                    break;
                }
            }
            
            document.body.classList.add(selectedType);
            
            // Play glitch sound (cached element)
            if (glitchSound) {
                glitchSound.currentTime = 0;
                glitchSound.play().catch(() => {}); // Silent fail
            }
            
            // Remove glitch class after animation completes
            setTimeout(() => {
                document.body.classList.remove(selectedType);
            }, glitchDurations[selectedType]);
        }, Math.random() * 100);
    }
    
    // Wait for loading screen to finish
    setTimeout(() => {
        // Initial delay before first glitch (5-10 seconds)
        const initialDelay = 5000 + Math.random() * 5000;
        
        setTimeout(() => {
            triggerRandomGlitch();
            
            // Recursive scheduling (more efficient than setInterval)
            function scheduleNextGlitch() {
                const delay = 20000 + Math.random() * 20000; // 20-40 seconds (more frequent)
                setTimeout(() => {
                    triggerRandomGlitch();
                    scheduleNextGlitch();
                }, delay);
            }
            
            scheduleNextGlitch();
        }, initialDelay);
    }, 15000);
});

// Passcode functionality
document.addEventListener('DOMContentLoaded', function() {
    const passcodeInput = document.getElementById('passcodeInput');
    const accessButton = document.getElementById('accessButton');
    const passcodeError = document.getElementById('passcodeError');
    const secretFilesSection = document.getElementById('secretFilesSection');
    const filesGrid = document.getElementById('filesGrid');
    const fileCount = document.getElementById('fileCount');
    
    const CORRECT_PASSCODE = '1991s'; // ARG puzzle code from district menus
    
    function checkPasscode() {
        const enteredPasscode = passcodeInput.value.trim();
        
        if (enteredPasscode === CORRECT_PASSCODE) {
            // Correct passcode
            passcodeError.textContent = '';
            passcodeError.classList.remove('show');
            secretFilesSection.classList.remove('hidden');
            
            // Show archive access section
            const archiveAccessSection = document.getElementById('archiveAccessSection');
            if (archiveAccessSection) {
                archiveAccessSection.style.display = 'block';
            }
            
            // Update file count (File 008 is in separate archive section, not here)
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
    
    // Archive Access Puzzle (Unlocks File 008 in separate section)
    const archiveCodeInput = document.getElementById('archiveCodeInput');
    const archiveAccessButton = document.getElementById('archiveAccessButton');
    const archiveError = document.getElementById('archiveError');
    const archiveFilesSection = document.getElementById('archiveFilesSection');
    const archiveFilesGrid = document.getElementById('archiveFilesGrid');
    const archiveFileCount = document.getElementById('archiveFileCount');
    const file007 = document.getElementById('file007');
    const file008 = document.getElementById('file008');
    const ARCHIVE_CODE_1 = '72314';
    const ARCHIVE_CODE_2 = '12831247';
    
    // Ensure archive files section is hidden on page load
    if (archiveFilesSection) {
        archiveFilesSection.classList.add('hidden');
    }
    
    function checkArchiveCode() {
        if (!archiveCodeInput) return;
        
        const enteredCode = archiveCodeInput.value.trim().replace('ARCHIVE-', '').replace('archive-', '').replace(/\s/g, '');
        
        if (enteredCode === ARCHIVE_CODE_1) {
            // First code - unlock file 007 and show archive files section
            if (archiveError) {
                archiveError.textContent = '';
                archiveError.classList.remove('show');
            }
            if (archiveFilesSection) {
                archiveFilesSection.classList.remove('hidden');
            }
            if (file007) {
                file007.classList.remove('hidden');
            }
            if (archiveCodeInput) {
                archiveCodeInput.value = '';
            }
            
            // Update archive file count
            if (archiveFilesGrid && archiveFileCount) {
                const archiveFileItems = archiveFilesGrid.querySelectorAll('.file-item:not(.hidden)');
                archiveFileCount.textContent = archiveFileItems.length;
            }
            
            // Add success message to terminal
            const terminalBody = document.querySelector('.terminal-body');
            const cursor = document.querySelector('.cursor');
            if (terminalBody && cursor) {
                const successLine = document.createElement('div');
                successLine.className = 'terminal-line';
                successLine.innerHTML = '<span class="output">[SYSTEM] Archive access granted. Restricted files unlocked.</span>';
                terminalBody.insertBefore(successLine, cursor.parentElement);
            }
        } else if (enteredCode === ARCHIVE_CODE_2) {
            // Second code - unlock file 008
            if (archiveError) {
                archiveError.textContent = '';
                archiveError.classList.remove('show');
            }
            if (archiveFilesSection) {
                archiveFilesSection.classList.remove('hidden');
            }
            if (file008) {
                file008.classList.remove('hidden');
            }
            if (archiveCodeInput) {
                archiveCodeInput.value = '';
            }
            
            // Update archive file count
            if (archiveFilesGrid && archiveFileCount) {
                const archiveFileItems = archiveFilesGrid.querySelectorAll('.file-item:not(.hidden)');
                archiveFileCount.textContent = archiveFileItems.length;
            }
            
            // Add success message to terminal
            const terminalBody = document.querySelector('.terminal-body');
            const cursor = document.querySelector('.cursor');
            if (terminalBody && cursor) {
                const successLine = document.createElement('div');
                successLine.className = 'terminal-line';
                successLine.innerHTML = '<span class="output">[SYSTEM] Archive access granted. Additional restricted file unlocked.</span>';
                terminalBody.insertBefore(successLine, cursor.parentElement);
            }
        } else if (enteredCode) {
            // Wrong code
            if (archiveError) {
                archiveError.textContent = 'INVALID ARCHIVE CODE';
                archiveError.classList.add('show');
            }
            if (archiveCodeInput) {
                archiveCodeInput.value = '';
            }
            
            // Add error message to terminal
            const terminalBody = document.querySelector('.terminal-body');
            const cursor = document.querySelector('.cursor');
            if (terminalBody && cursor) {
                const errorLine = document.createElement('div');
                errorLine.className = 'terminal-line';
                errorLine.innerHTML = '<span class="output" style="color: #ff0000;">[SYSTEM] Archive access denied. Unauthorized attempt logged.</span>';
                terminalBody.insertBefore(errorLine, cursor.parentElement);
            }
        }
    }
    
    if (archiveAccessButton) {
        archiveAccessButton.addEventListener('click', checkArchiveCode);
    }
    
    if (archiveCodeInput) {
        archiveCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkArchiveCode();
            }
        });
    }
    
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

    // File viewing functionality - SIMPLE DIRECT APPROACH
    
    const fileContents = {
        '001': {
            name: 'FILE_001_CORP_MEMO_RESOURCE_REALLOC.txt',
            content: `TO: Sector Chief T. Kellar, Resource Management Division
FROM: Executive Comptroller R. Vance, ACC Internal Oversight
DATE: 15.08.2274
SUBJECT: Scheduled Water Redistribution and Tier 3 Consumption Quota Adjustment
CLASSIFICATION: LEVEL 4 - INTERNAL USE ONLY
DISTRIBUTION: Directorate Members, Sector Chiefs, Resource Allocation Committee

═══════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY:
The Aethelburg Water Filtration Plant (WFP-03) has exceeded its maximum operational efficiency for Q3 2274. This surplus capacity presents both an opportunity and a strategic necessity for maintaining our established resource hierarchy and economic control mechanisms. The <span class="file-content-glitch-letter letter-j">j</span>oint allocation committee has reviewed these findings.

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
        '002': {
            name: 'FILE_002_ARCH_PLAN_SENTRY_REVISION.txt',
            content: `PROJECT NAME: SENTRY (Secure Neutralization & Containment Ring)
DATE: 09.11.2273
REVISION: 3.2 - URGENT SECURITY UPDATE
CLEARANCE: Level 4 (Urban Defense & Planning Committee)
AUTHORIZATION: Directorate Order 12-Gamma
CLASSIFICATION: LEVEL 4 - INFRASTRUCTURE SECURITY

═══════════════════════════════════════════════════════════════════

PROJECT OVERVIEW:

SENTRY represents the primary defensive perimeter surrounding Aethelburg's core sectors (Tiers 1-3). The system consists of a multi-layered containment wall designated "The Aegis," which serves both as physical barrier and psychological deterrent against unauthorized access and organized resistance. <span class="file-content-glitch-letter letter-a">A</span>ll access points are monitored continuously.

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
        '003': {
            name: 'FILE_003_PSYCH_ASSESS_JADE_PROJECT01.txt',
            content: `PSYCHOLOGICAL ASSESSMENT LOG
PROJECT: 1 - JADE
SUBJECT: J-01 (Designation: "Jade")
<span class="file-content-glitch-letter letter-d">D</span>ate of assessment: 21.03.2275
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

We need to CRUSH the consciousness, not just numb it. The current approach is allowing baseline personality and memory to re-emerge. Protocol LOCKDOWN is designed to achieve near-total cognitive suppression, reducing the subject to a purely reactive biological system. Data collection will continue throughout the process.

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
        '004': {
            name: 'FILE_004_SEC_INCIDENT_SECTOR_B9.txt',
            content: `SECURITY INCIDENT REPORT
REPORTING OFFICER: Captain D. Solis, Internal Security Division
DATE: 03.07.2274
INCIDENT TYPE: Unauthorized Data Extraction (Class Alpha-Prime)
LOCATION: ACC Central Archives, Vault 3-B
CLASSIFICATION: LEVEL 5 - DIRECTORATE EYES ONLY
INCIDENT ID: SEC-2274-0447

═══════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY:

A highly skilled intrusion team successfully breached Vault 3-B security protocols and extracted approximately 4 TB of encrypted pre-Collapse financial records before being neutralized. One data storage unit remains unaccounted for, creating a CRITICAL security threat to ACC operational security and public narrative control. <span class="file-content-glitch-letter letter-e">E</span>xtraction protocols were compromised.

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
   - Emergency protocols must be activated immediately

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
        '005': {
            name: 'FILE_005_INTERNAL_AUDIT_EXEC_SALARIES.txt',
            content: `INTERNAL AUDIT - ACC EXECUTIVE COMPENSATION
SECTION: Annual Compensation Review (Unaudited, Executive-Eyes Only)
FISCAL YEAR: 2274
CONFIDENTIALITY: ABSOLUTE
CLASSIFICATION: LEVEL 5 - DIRECTORATE MEMBERS ONLY
AUDIT REFERENCE: <span class="file-content-glitch-letter letter-0">0</span>47-2274
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
        '006': {
            name: 'FILE_006_BIOHAZARD_ERD_LAB_BREACH.txt',
            content: `BIO-HAZARD ALERT
ALERT LEVEL: EXTREME (Immediate Containment Required)
DATE: 05.06.2275 (02:15 hours)
LOCATION: ERD Research Complex, Biological Sequestration Unit 4
INCIDENT ID: BIO-2275-001
CLASSIFICATION: LEVEL 5 - PROJECT 01 EYES ONLY
REPORTING OFFICER: Dr. M. Chen, ERD Biological Safety Division

═══════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY:

An accidental release of Pathogen Omega (P-Omega) has occurred in Biological Sequestration Unit 4. Initial containment protocols have FAILED. The air filtration system in Sub-Level 12 (where Project 0<span class="file-content-glitch-letter letter-1">1</span>: Jade is housed) has been contaminated. This creates an EXTREME risk of P-Omega coming into contact with Subject J-01's symbiotic virus (R.V. A-01), which could result in the creation of an unstable, contagious bioweapon.

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
        },
        '007': {
            name: 'FILE_007_ARCHIVE_72314_RESTRICTED.txt',
            content: `ARCHIVE REFERENCE: 72314
CLASSIFICATION: LEVEL 6 - DIRECTORATE EYES ONLY
DATE: [REDACTED]
AUTHORIZATION: Dr. V. Hollis, ERD Behavioral Sciences Division

═══════════════════════════════════════════════════════════════════

PROJECT 01: JADE - COMPLETE CONTROL MATRIX ANALYSIS

═══════════════════════════════════════════════════════════════════

EXECUTIVE SUMMARY:

This document contains the complete operational parameters for Project 01: Jade, including all classified control mechanisms, psychological manipulation protocols, and the true purpose of the asset beyond what is documented in standard reports.

═══════════════════════════════════════════════════════════════════

CONTROL MECHANISM BREAKDOWN:

1. MEMORY WIPE FAILURE (INTENTIONAL):
   - The "failure" of the final Memory Wipe was a calculated decision
   - Subject J-01 retains specific memory fragments:
     * Pre-Collapse location: [REDACTED: Sector 7, Block 23, Unit 14]
     * Relation to Subject: [CLASSIFIED: Maternal connection]
   - These fragments create a psychological anchor point
   - The instability they cause is essential for control

2. LOYALTY SCORE MANIPULATION:
   - The L.S. metric is a red herring
   - True control is measured by "Target Engagement Rate" (T.E.R.)
   - Current T.E.R.: 94.7% (External Threats)
   - Desired output: [CLASSIFIED: Complete external threat elimination with zero internal resistance]
   - The low L.S. (0.3) is intentional - it ensures she never trusts us enough to question orders

3. SYMBIOTIC MARKER FLUCTUATION:
   - The fluctuation is [REDACTED: Controlled by Protocol HUSH]
   - Purpose: Maintain biological dependency
   - Without fluctuation, the subject would achieve [CLASSIFIED: Autonomous viral control]
   - This would result in complete loss of asset

4. COGNITIVE INTEGRATION RESISTANCE:
   - The 62% integration (vs 98% target) is optimal
   - Higher integration would create [CLASSIFIED: Self-awareness that breaks control]
   - Current level maintains combat effectiveness while preventing questioning

═══════════════════════════════════════════════════════════════════

TRUE PURPOSE OF PROJECT 01:

Project 01: Jade is not a research asset. It is a weapon.

PRIMARY FUNCTION:
- Elimination of external threats to ACC Directorate
- Protection of Tier 1 and Tier 2 infrastructure
- Suppression of organized resistance in Tier 3 and Tier 4

SECONDARY FUNCTION:
- Psychological warfare against potential dissidents
- Demonstration of ACC power and control
- Deterrent against future resistance movements

TERTIARY FUNCTION:
- Biological weapon development (via symbiotic virus research)
- Population control mechanisms
- Resource allocation enforcement

═══════════════════════════════════════════════════════════════════

CONTROL PROTOCOLS:

PROTOCOL HUSH:
- Maintains viral dependency
- Prevents autonomous viral control
- Administered via [CLASSIFIED: Air filtration system in Sub-Level 12]

═══════════════════════════════════════════════════════════════════

PROTOCOL REFERENCE MATRIX (Authorized Protocols):

[3] PROTOCOL LOCKDOWN:
- Aggressive compliance enforcement
- Used when cognitive integration exceeds 70%
- Reduces subject to reactive biological system
- Activation threshold: Cognitive Integration > 70%
- Result: Complete suppression of baseline consciousness
- Status: ACTIVE (Standby mode)

[1] PROTOCOL BLANK SLATE:
- Full memory wipe on all civilian network feeds and data access points
- Activated during security breaches or data leaks
- Complete erasure of unauthorized access logs
- Scope: City-wide network infrastructure
- Duration: Until threat neutralized
- Status: AUTHORIZED (Emergency use only)

[4] PROTOCOL SENTRY:
- Perimeter defense and containment ring activation
- Structural reinforcement of Tier boundaries
- Sub-Surface Exclusion Protocol implementation
- Seals all maintenance access points between tiers
- Permanent isolation of Tier 4 Gutter Zones
- Status: IMPLEMENTED (Northern Arc complete)

[2] PROTOCOL GOLIATH:
- Emergency termination protocol
- Activated if P-Omega contamination occurs
- Asset loss acceptable to prevent bioweapon creation
- Immediate isolation and armed personnel deployment
- Complete facility sterilization if necessary
- Status: AUTHORIZED (Project 01 contingency)

═══════════════════════════════════════════════════════════════════

PROTOCOL EXECUTION PRIORITY LIST:

The following protocols are authorized for Project 01 operations. Execution order may vary based on threat assessment:

• <span style="color: #ff0000; text-decoration: underline; font-weight: bold;">PROTOCOL SENTRY</span> - Perimeter defense activation (Priority: High)
• <span style="color: #ff0000; text-decoration: underline; font-weight: bold;">PROTOCOL BLANK SLATE</span> - Network memory wipe (Priority: Emergency)
• <span style="color: #ff0000; text-decoration: underline; font-weight: bold;">PROTOCOL GOLIATH</span> - Emergency termination (Priority: Critical)
• <span style="color: #ff0000; text-decoration: underline; font-weight: bold;">PROTOCOL LOCKDOWN</span> - Compliance enforcement (Priority: Standard)

Note: Protocol execution sequence is determined by threat level and asset status. All protocols require Level 5+ clearance for activation.

═══════════════════════════════════════════════════════════════════

PSYCHOLOGICAL STATE REQUIREMENTS:

The subject must NEVER achieve [CLASSIFIED: Psychological State: Trust].

Trust = Complete loss of control.

Current state: Paranoia, rage, distrust
Target state: Maintained paranoia with external focus
Forbidden state: Trust, understanding, empathy

The "break" in memory wipe is not to be repaired. It is the foundation of control.

═══════════════════════════════════════════════════════════════════

ARCHIVE CROSS-REFERENCES:

- File 004: Psychological Assessment (Standard Report)
- File 007: ERD Lab Breach (P-Omega Risk Assessment)
- Personnel Database: jade01 (Parameter Baseline)
- Archive 72314: This document (Complete Control Matrix)

═══════════════════════════════════════════════════════════════════

FINAL INSTRUCTION:

Do not repair the break.
Do not increase cognitive integration.
Do not attempt to raise loyalty score.
Do not stabilize symbiotic marker.

The instability IS the control mechanism.

═══════════════════════════════════════════════════════════════════

END OF ARCHIVE DOCUMENT`
        },
        '008': {
            name: 'FILE_008_EMERGENCY_COMM_LOG.txt',
            content: `EMERGENCY COMMUNICATION LOG
CLASSIFICATION: LEVEL 7 - CRITICAL INCIDENT
DATE: [REDACTED] - IMMEDIATE POST-BREACH
AUTHORIZATION: ERD Emergency Protocol Alpha
STATUS: ACTIVE INCIDENT - CONTAINMENT FAILURE

═══════════════════════════════════════════════════════════════════

SECURE CHANNEL LOG - ERD RESEARCH COMPLEX
TIMESTAMP: [REDACTED] - APPROXIMATELY 05:45-05:55 HOURS

═══════════════════════════════════════════════════════════════════

[05:45:12] Dr. V. Hollis → ERD Command Center
───────────────────────────────────────────────────────────────────
Containment is breached. Sub-Level 12 integrity failure. J-01 is out. 
Repeat: Jade is loose. All containment protocols have failed. Asset 
has escaped primary holding facility. Security teams are responding 
but initial reports indicate structural damage to containment walls. 
The breach was not through standard access points.

═══════════════════════════════════════════════════════════════════

[05:46:03] Dr. S. Krell → Dr. V. Hollis
───────────────────────────────────────────────────────────────────
Hollis, status on Protocol HANGAR? Why was it not activated 
immediately? We have emergency containment protocols for exactly this 
scenario. What happened to the automated lockdown systems? The asset 
should not have been able to breach Sub-Level 12 without triggering 
multiple security failsafes.

═══════════════════════════════════════════════════════════════════

[05:46:28] Dr. V. Hollis → Dr. S. Krell
───────────────────────────────────────────────────────────────────
No time. She didn't use the doors. [CLASSIFIED: Security Feature] 
was ripped out. The physical trauma alone suggests a Biotic Overload 
Event (BOE). The containment walls weren't breached - they were 
pulverized. Structural analysis shows the damage pattern is consistent 
with extreme biological force application, far beyond normal human 
capability. This isn't a breach - it's a demolition.

Initial assessment indicates the asset has achieved a level of 
symbiotic integration we didn't anticipate. The R.V. A-01 virus may 
have entered an accelerated mutation phase. We're seeing biological 
readings that exceed all previous parameters by 300-400%.

═══════════════════════════════════════════════════════════════════

[05:47:15] Dr. S. Krell → Dr. V. Hollis
───────────────────────────────────────────────────────────────────
A BOE... meaning the R.V. A-01 virus is airborne? Where is she 
tracking? We need immediate trajectory data. If the symbiotic virus 
has become transmissible, this is no longer a containment breach - 
it's a potential city-wide biological event. 

What's her current location? Security cameras? Motion sensors? 
Anything that can give us a vector on her movement pattern. We need to 
predict her destination before she reaches a populated zone.

═══════════════════════════════════════════════════════════════════

[05:48:42] Dr. V. Hollis → Dr. S. Krell
───────────────────────────────────────────────────────────────────
Unknown. Her tracker is sporadic. More critically, Krell, we had a 
P-Omega contamination alert in the air ducts right before the breach. 
File 007. Remember? The biohazard alert from earlier today - the 
accidental release in Biological Sequestration Unit 4. The air 
filtration system in Sub-Level 12 was contaminated.

If P-Omega has come into contact with the R.V. A-01 virus... if they've 
bonded or merged at a molecular level... we're not dealing with a 
containment breach anymore. We're dealing with a potential bioweapon 
that's now mobile, intelligent, and extremely hostile.

The contamination timeline matches the breach timeline. This is not 
coincidence. The asset may have been exposed to P-Omega during the 
breach, or worse - the exposure may have triggered the BOE that allowed 
her to escape.

═══════════════════════════════════════════════════════════════════

[05:48:58] Dr. S. Krell → Dr. V. Hollis
───────────────────────────────────────────────────────────────────
Shit. If the symbiotic virus bonds with P-Omega... it won't just 
track. It'll become a [REDACTED: 2 words] carrier. A massive, 
weaponized viral cloud. The R.V. A-01 was designed to be benign when 
properly contained. But if it's merged with P-Omega's virulence...

The mortality rate for P-Omega alone is 94-97%. If that combines with 
the transmissibility and mutation rate of R.V. A-01, we could be 
looking at a pathogen that spreads like wildfire and kills within 
hours. The entire city could be at risk.

We need to alert the Directorate immediately. This requires Protocol 
GOLIATH authorization. Asset preservation is no longer the priority - 
containment of the biological threat is.

═══════════════════════════════════════════════════════════════════

[05:49:33] Dr. V. Hollis → Dr. S. Krell
───────────────────────────────────────────────────────────────────
Exactly. The "paranoia" we engineered? That rage we needed to keep 
her fighting? It's now driving an asset that could cause a Full-Scale 
Biotic Cascade (FSBC) across the whole sector. Every person she 
encounters could become a carrier. Every surface she touches could 
become a contamination vector.

The psychological conditioning we used to maintain control - the 
distrust, the anger, the external threat focus - it's all still 
active. But now it's not being channeled through our containment 
systems. It's being channeled through a mobile, highly aggressive 
biological weapon that's moving through the city.

We created a perfect weapon. And now we've lost control of it.

═══════════════════════════════════════════════════════════════════

[05:50:17] Dr. S. Krell → Dr. V. Hollis
───────────────────────────────────────────────────────────────────
Directorate wants immediate recapture. Can we use the neurotoxins? 
LOCKDOWN Protocol? If we can sedate her or trigger a controlled 
shutdown, we might be able to contain the biological threat before it 
spreads. The LOCKDOWN neurotoxins were designed to suppress 
consciousness - if we can get them into her system, it might prevent 
further viral emission.

What's the status on the tracking systems? Do we have any way to 
locate her precisely enough for a targeted delivery?

═══════════════════════════════════════════════════════════════════

[05:51:08] Dr. V. Hollis → Dr. S. Krell
───────────────────────────────────────────────────────────────────
Negative. She's moving too fast toward Tier 3. Firing LOCKDOWN now 
would just cause a seizure and a massive, localized [REDACTED: Viral 
Emission] right in a populated zone. That kills thousands. The 
neurotoxins might suppress her consciousness, but they won't stop the 
biological processes that are now generating the viral load.

If we trigger a seizure or biological shutdown in a Tier 3 residential 
block, the resulting viral release could contaminate the entire sector. 
We'd be trading one disaster for another. The LOCKDOWN protocol was 
designed for controlled containment environments, not active pursuit 
through civilian areas.

We need a different approach. Something that can neutralize the threat 
without causing a secondary biological event.

═══════════════════════════════════════════════════════════════════

[05:52:41] Dr. S. Krell → Dr. V. Hollis
───────────────────────────────────────────────────────────────────
GOLIATH then? Initiate the containment collapse now, before she exits 
the perimeter. It's the only way to stop the P-Omega risk. If we can 
seal off the entire lower research complex and trigger the structural 
demolition charges, we might be able to contain both the asset and 
any viral contamination within the facility.

The GOLIATH protocol was designed for exactly this scenario - emergency 
termination when P-Omega contamination occurs. Asset loss is acceptable 
to prevent bioweapon creation. We have the authorization. We have the 
capability. We just need to execute before she reaches the surface.

What's her current trajectory? How long until she breaches the perimeter?

═══════════════════════════════════════════════════════════════════

[05:53:27] Dr. V. Hollis → Dr. S. Krell
───────────────────────────────────────────────────────────────────
Denied. Directorate orders: Asset preservation is paramount. They 
still think they can control her. I've already requested GOLIATH 
authorization three times. Each request has been denied. The 
Directorate is treating this as a containment breach, not a biological 
threat.

They're citing the financial investment in Project 01. They're citing 
the research value. They're citing the potential for recapture and 
reconditioning. They don't understand - or they don't want to understand 
- that we're not dealing with a research asset anymore. We're dealing 
with a walking biological weapon that's moving toward a population 
center.

The profit margins are more important than the city. The asset value 
is more important than public safety. This is exactly what we warned 
them about, Krell. This is exactly why we needed emergency protocols 
that bypass Directorate approval.

═══════════════════════════════════════════════════════════════════

[05:53:48] Dr. S. Krell → Dr. V. Hollis
───────────────────────────────────────────────────────────────────
They're willing to risk Aethelburg for the bottom line! Where is she 
heading, Hollis? Give me a final coordinate. If we can't get 
authorization for GOLIATH, we need to at least warn Central Security. 
We need to get Tier 3 evacuated. We need to get emergency response 
teams in position.

Even if the Directorate won't authorize asset termination, we can still 
minimize casualties. We can still try to contain the spread. We can 
still save lives if we act now.

Where is she? Where is Jade going?

═══════════════════════════════════════════════════════════════════

[05:54:22] Dr. V. Hollis → Dr. S. Krell
───────────────────────────────────────────────────────────────────
Last ping: Surface Level. Near the old [REDACTED: Location Hint] 
checkpoint. She's going where the Unlicensed Resident Population (URP) 
is thickest. It's a disaster. The tracker signal is weak - she might 
have damaged the implant - but the last confirmed location puts her 
within 200 meters of the Tier 4 access point.

If she reaches Tier 4, we lose all tracking capability. The Gutter 
Zones don't have surveillance infrastructure. The URP population is 
dense, unmonitored, and completely vulnerable. If the viral load is 
transmissible, it could spread through the entire Tier 4 population 
within hours.

But more than that - Tier 4 is where the resistance movements are 
strongest. If Jade makes contact with organized resistance cells, if 
they see her as a weapon they can use against the Directorate... this 
isn't just a biological threat anymore. It's a political and military 
threat.

═══════════════════════════════════════════════════════════════════

[05:55:14] Dr. S. Krell → Dr. V. Hollis
───────────────────────────────────────────────────────────────────
We need to warn Central Security. Forget recapture. We need to lockdown 
the entire lower city now. Tier 3, Tier 4, everything below the 
Executive Domes. We need to seal the perimeter. We need to stop all 
movement between sectors. We need to get emergency medical teams in 
position.

If we can't terminate the asset, we can at least try to contain the 
threat. We can at least try to prevent the spread. We can at least try 
to save the people who haven't been exposed yet.

This is Protocol SENTRY activation territory. We need the perimeter 
walls sealed. We need all access points closed. We need the entire 
lower city in lockdown.

═══════════════════════════════════════════════════════════════════

[05:55:47] Dr. V. Hollis → Dr. S. Krell
───────────────────────────────────────────────────────────────────
Too late. The comms are jammed. The only active channel is this one. 
She knows the network. The asset has compromised our communication 
systems. All standard channels are down. All emergency frequencies are 
blocked. We can't reach Central Security. We can't reach the 
Directorate. We can't reach anyone outside this secure channel.

She's been planning this. The breach wasn't spontaneous. The 
communication jamming wasn't accidental. The asset has been 
systematically disabling our response capabilities. She knows our 
protocols. She knows our systems. She knows exactly how to prevent us 
from stopping her.

The only reason this channel is still active is because it's a 
backup system she either doesn't know about or can't access. But that 
won't last. She'll find it. She'll shut it down. And then we'll be 
completely blind.

We're on our own, Krell. The asset is loose. The biological threat is 
active. The communication network is compromised. And the Directorate 
won't authorize the only protocol that might stop this.

This is how it ends. This is how the city falls.

═══════════════════════════════════════════════════════════════════

[END OF COMMUNICATION LOG]

═══════════════════════════════════════════════════════════════════

CLASSIFICATION: LEVEL 7 - CRITICAL INCIDENT
STATUS: ONGOING - CONTAINMENT FAILURE
THREAT LEVEL: EXTREME

═══════════════════════════════════════════════════════════════════

[SYSTEM NOTICE]
This log has been automatically archived. Access requires Level 7 
clearance or higher. Unauthorized access is punishable by immediate 
termination.

═══════════════════════════════════════════════════════════════════

[CLASSIFIED ACCESS CODE FOR JADE FILES]

═══════════════════════════════════════════════════════════════════

                    ╔═══════════════════════════════╗
                    ║                               ║
                    ║        JADE-ACCESS-CODE       ║
                    ║                               ║
                    ║           9147                ║
                    ║                               ║
                    ╚═══════════════════════════════╝

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        'PUBLIC_001': {
            name: 'PUBLIC_001_DISTRICT_OVERVIEW.txt',
            content: `AETHELBURG CITY DISTRICTS - PUBLIC INFORMATION
DATE: 01.12.2275
CLASSIFICATION: PUBLIC
AUTHORIZATION: ACC Public Relations Division

═══════════════════════════════════════════════════════════════════

TIER 1: EXECUTIVE DOMES
Location: City Center
Population: ~2,500-3,000
Clearance Required: Level 5 (Executive)
Description: The administrative and residential center for ACC Directorate members and highest-tier executives. This district maintains the highest security standards and resource allocation priority.

Key Facilities:
- ACC Central Command
- Executive Research Complex
- Private Medical Facilities
- Directorate Residences

═══════════════════════════════════════════════════════════════════

TIER 2: MIDDLE SPIRES
Location: Mid-Inner City
Population: ~45,000-50,000
Clearance Required: Level 3-4 (Professional)
Description: Professional class district housing mid-level executives, researchers, engineers, and essential service providers. Residents maintain city infrastructure and research operations.

Key Facilities:
- Research and Development Labs
- Technical Training Centers
- Mid-Level Administrative Offices
- Standard Residential Blocks

═══════════════════════════════════════════════════════════════════

TIER 3: LOWER SPIRES
Location: Mid-Outer City
Population: ~180,000-200,000
Clearance Required: Level 1-2 (Civilian)
Description: Working class residential district. Primary employment in manufacturing, maintenance, and service industries. Residents contribute to city operations through essential labor.

Key Facilities:
- Manufacturing Plants (12 major facilities)
- Public Housing Blocks
- Basic Medical Clinics
- Security Checkpoints
- Resource Distribution Centers

═══════════════════════════════════════════════════════════════════

TIER 4: GUTTER ZONES
Location: Outer Perimeter
Population: ~847,000 (Unlicensed Resident Population)
Clearance Required: None (Unlicensed)
Description: Outer district housing unlicensed residents. Infrastructure maintenance ongoing. Access restricted due to security protocols.

Note: Tier 4 currently undergoing infrastructure upgrades. Service interruptions may occur.

═══════════════════════════════════════════════════════════════════

RESOURCE ALLOCATION:
All tiers receive resources according to Directive 44-Beta allocation protocols. Resource distribution is managed by the Resource Management Division to ensure city stability and operational efficiency.

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        'PUBLIC_002': {
            name: 'PUBLIC_002_RESOURCE_ALLOCATION.txt',
            content: `AETHELBURG RESOURCE ALLOCATION - PUBLIC SUMMARY
DATE: 15.11.2275
CLASSIFICATION: PUBLIC
AUTHORIZATION: Resource Management Division

═══════════════════════════════════════════════════════════════════

WATER DISTRIBUTION:
Current Status: CRITICAL CAPACITY
All residents are reminded to adhere to daily consumption quotas:
- Tier 1: Standard allocation maintained
- Tier 2: Standard allocation maintained
- Tier 3: 18% of total production (quota enforced)
- Tier 4: Infrastructure maintenance ongoing

Conservation Measures:
- All non-essential water usage prohibited
- Violations result in immediate service suspension
- Report water leaks immediately to Maintenance Division

═══════════════════════════════════════════════════════════════════

POWER GRID STATUS:
Current Load: 87% (STABLE)
Scheduled Maintenance:
- Sector 7, Blocks 20-25: 18.12.2275, 02:00-06:00
- Prepare for temporary service interruption

Power Conservation:
- Unnecessary lighting prohibited after 22:00
- High-consumption devices restricted during peak hours
- Violations may result in service suspension

═══════════════════════════════════════════════════════════════════

FOOD DISTRIBUTION:
Current Stock: 62% (LOW)
Distribution Schedule:
- Tier 1: Daily distribution
- Tier 2: Daily distribution
- Tier 3: Weekly rations (Sundays, 08:00-16:00)
- Tier 4: Contact Resource Distribution Center

Ration Cards Required:
All Tier 3 and Tier 4 residents must present valid ration cards at distribution centers. Lost or damaged cards must be reported immediately.

═══════════════════════════════════════════════════════════════════

MEDICAL SUPPLIES:
Current Availability: 45% (CRITICAL)
Priority Allocation:
- Tier 1: Full access
- Tier 2: Standard access
- Tier 3: Emergency cases only
- Tier 4: Contact Emergency Services

Medical Emergency Protocol:
In case of medical emergency, contact Emergency Services immediately. Response time varies by district and priority level.

═══════════════════════════════════════════════════════════════════

RESOURCE TAX INFORMATION:
All residents are subject to Resource Tax based on tier classification and consumption levels. Tax rates are determined by Directive 44-Beta and are non-negotiable.

Payment Methods:
- Standard Credits (preferred)
- Labor vouchers (Tier 3 and Tier 4 only)
- Service credits (approved cases only)

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        'PUBLIC_003': {
            name: 'PUBLIC_003_PUBLIC_SAFETY_NOTICE.txt',
            content: `PUBLIC SAFETY NOTICE
DATE: 20.11.2275
CLASSIFICATION: PUBLIC
AUTHORIZATION: ACC Security Division

═══════════════════════════════════════════════════════════════════

CURFEW PROTOCOLS:
All Tier 3 and Tier 4 residents must observe curfew hours:
- Weekdays: 22:00 - 06:00
- Weekends: 23:00 - 06:00
- Violations result in immediate detention

Exceptions:
- Essential service workers with valid permits
- Medical emergencies (with documentation)
- Authorized personnel with clearance

═══════════════════════════════════════════════════════════════════

SECURITY CHECKPOINTS:
All residents must carry valid identification at all times. Random security checks are conducted throughout all districts. Failure to present identification results in immediate detention.

Required Documents:
- Resident ID Card
- Clearance Level Badge
- Employment Verification (if applicable)
- Resource Ration Card

═══════════════════════════════════════════════════════════════════

REPORTING SUSPICIOUS ACTIVITY:
If you observe suspicious activity, report immediately to Security Division:
- Emergency Hotline: [REDACTED]
- Security Checkpoints: Available 24/7
- Online Reporting: Available via authorized terminals

Do not approach suspicious individuals. Maintain distance and contact security immediately.

═══════════════════════════════════════════════════════════════════

PROHIBITED ACTIVITIES:
The following activities are strictly prohibited and result in immediate termination of residency:
- Unauthorized access to restricted areas
- Possession of unauthorized communication devices
- Distribution of unauthorized materials
- Organization of unauthorized gatherings
- Resistance activity or planning
- Sabotage of city infrastructure
- Theft of resources
- Violation of clearance protocols

═══════════════════════════════════════════════════════════════════

EMERGENCY PROTOCOLS:
In case of emergency:
1. Contact Emergency Services immediately
2. Follow instructions from security personnel
3. Do not panic or cause disruption
4. Await further instructions from authorities

Emergency Services Contact:
- Medical: [REDACTED]
- Security: [REDACTED]
- Fire: [REDACTED]
- Infrastructure: [REDACTED]

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        'PUBLIC_004': {
            name: 'PUBLIC_004_CITY_ORDINANCES.txt',
            content: `AETHELBURG CITY ORDINANCES
DATE: 05.01.2274
CLASSIFICATION: PUBLIC
AUTHORIZATION: ACC Legal Division

═══════════════════════════════════════════════════════════════════

ORDINANCE 1: RESOURCE CONSERVATION
All residents must adhere to resource consumption quotas as determined by Directive 44-Beta. Violations result in:
- First offense: Warning and service suspension (24 hours)
- Second offense: Service suspension (72 hours) and fine
- Third offense: Permanent service termination and relocation

═══════════════════════════════════════════════════════════════════

ORDINANCE 2: CLEARANCE LEVEL COMPLIANCE
Residents must remain within districts appropriate to their clearance level. Unauthorized access to higher-clearance districts results in immediate detention and potential termination of residency.

Clearance Levels:
- Level 1-2: Tier 3 and Tier 4 access only
- Level 3-4: Tier 2, Tier 3, and Tier 4 access
- Level 5: All districts (with authorization)

═══════════════════════════════════════════════════════════════════

ORDINANCE 3: IDENTIFICATION REQUIREMENTS
All residents must carry valid identification at all times. Failure to present identification when requested by security personnel results in immediate detention.

Required Information:
- Full name
- Resident ID number
- Clearance level
- District of residence
- Employment status

═══════════════════════════════════════════════════════════════════

ORDINANCE 4: COMMUNICATION RESTRICTIONS
Unauthorized communication devices are prohibited. All communication must occur through authorized channels monitored by Security Division.

Prohibited:
- Unauthorized radio equipment
- Unmonitored communication devices
- Encrypted communication (without authorization)
- Communication with resistance elements

═══════════════════════════════════════════════════════════════════

ORDINANCE 5: ASSEMBLY RESTRICTIONS
Unauthorized gatherings of more than 5 individuals are prohibited without prior authorization from Security Division.

Exceptions:
- Authorized public events
- Religious services (with permit)
- Educational gatherings (with authorization)
- Employment-related meetings

═══════════════════════════════════════════════════════════════════

ORDINANCE 6: EMPLOYMENT REQUIREMENTS
All able-bodied residents must maintain employment or face resource allocation reduction. Unemployment benefits are available only to those with valid medical documentation.

Employment Verification:
- Monthly verification required
- Failure to verify results in resource reduction
- False documentation results in termination

═══════════════════════════════════════════════════════════════════

ORDINANCE 7: HOUSING ASSIGNMENTS
Housing assignments are determined by clearance level and employment status. Unauthorized residence changes are prohibited.

Housing Protocol:
- Apply through Housing Registry
- Approval required before relocation
- Unauthorized relocation results in immediate eviction

═══════════════════════════════════════════════════════════════════

ORDINANCE 8: RESOURCE TAX COMPLIANCE
All residents must pay Resource Tax according to tier classification and consumption levels. Non-payment results in:
- Service suspension
- Asset forfeiture
- Potential relocation

═══════════════════════════════════════════════════════════════════

VIOLATION PENALTIES:
Violations of city ordinances result in penalties ranging from warnings to termination of residency. Severe violations may result in immediate detention and relocation to processing centers.

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        'PUBLIC_005': {
            name: 'PUBLIC_005_PUBLIC_HEALTH_REPORT.txt',
            content: `AETHELBURG PUBLIC HEALTH REPORT
DATE: 10.12.2275
CLASSIFICATION: PUBLIC
AUTHORIZATION: ACC Health Division

═══════════════════════════════════════════════════════════════════

CURRENT HEALTH STATUS:
Overall city health status: STABLE
No major outbreaks reported in the past 30 days.

═══════════════════════════════════════════════════════════════════

COMMON ILLNESSES:
Tier 3 and Tier 4 residents are advised to be aware of common illnesses:

1. Waterborne Illnesses:
   - Symptoms: Nausea, diarrhea, fever
   - Prevention: Boil all water before consumption
   - Treatment: Contact medical facilities if symptoms persist

2. Respiratory Infections:
   - Symptoms: Cough, difficulty breathing, fever
   - Prevention: Avoid crowded areas, maintain hygiene
   - Treatment: Rest and hydration, seek medical attention if severe

3. Nutritional Deficiencies:
   - Symptoms: Fatigue, weakness, dizziness
   - Prevention: Follow ration guidelines, supplement when possible
   - Treatment: Increase nutrient intake, contact medical facilities

═══════════════════════════════════════════════════════════════════

MEDICAL FACILITY STATUS:
- Tier 1: Fully operational, no wait times
- Tier 2: Operational, minimal wait times
- Tier 3: Operational, extended wait times (8-12 hours for non-emergency)
- Tier 4: Limited services, contact Emergency Services

═══════════════════════════════════════════════════════════════════

VACCINATION PROGRAMS:
Routine vaccinations available at all medical facilities:
- Standard immunization schedule maintained
- Priority given to Tier 1 and Tier 2 residents
- Tier 3 and Tier 4: Contact medical facilities for scheduling

═══════════════════════════════════════════════════════════════════

SANITATION PROTOCOLS:
All residents are reminded to maintain proper sanitation:
- Dispose of waste in designated areas only
- Report sanitation issues immediately
- Maintain personal hygiene to prevent disease spread

Sanitation Violations:
- Improper waste disposal results in fines
- Repeated violations result in service suspension

═══════════════════════════════════════════════════════════════════

HEALTH EMERGENCIES:
In case of health emergency:
1. Contact Emergency Medical Services immediately
2. Provide clear location and symptoms
3. Follow instructions from medical personnel
4. Await medical response team

Emergency Contact: [REDACTED]

═══════════════════════════════════════════════════════════════════

PREVENTIVE MEASURES:
- Maintain proper hygiene
- Follow resource consumption guidelines
- Report health concerns early
- Attend scheduled medical check-ups
- Follow vaccination schedules

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        'PUBLIC_006': {
            name: 'PUBLIC_006_HOUSING_REGISTRY.txt',
            content: `AETHELBURG HOUSING REGISTRY
DATE: 08.12.2275
CLASSIFICATION: PUBLIC
AUTHORIZATION: ACC Housing Division

═══════════════════════════════════════════════════════════════════

HOUSING ALLOCATION:
Housing assignments are determined by:
- Clearance level
- Employment status
- Family size
- Resource allocation history
- Security clearance status

═══════════════════════════════════════════════════════════════════

TIER 1 HOUSING:
- Luxury compounds (5,000+ square meters average)
- Private facilities included
- Climate-controlled environments
- Private security
- Application: Directorate approval required

═══════════════════════════════════════════════════════════════════

TIER 2 HOUSING:
- Standard residential units (80-120 square meters)
- Shared facilities
- Basic amenities included
- Application: Professional clearance required

═══════════════════════════════════════════════════════════════════

TIER 3 HOUSING:
- Dense residential blocks (15 square meters per person average)
- Shared facilities
- Basic amenities
- Application: Available to all Level 1-2 clearance holders

Current Availability:
- Sector 7, Blocks 20-30: Limited availability
- Sector 7, Blocks 31-40: Waitlist (6-12 months)
- Sector 7, Blocks 41-50: Waitlist (12-18 months)

Application Process:
1. Submit application at Housing Registry Office
2. Provide clearance documentation
3. Employment verification required
4. Wait for approval (processing time: 2-4 weeks)
5. Assignment based on availability

═══════════════════════════════════════════════════════════════════

TIER 4 HOUSING:
- Unlicensed resident housing
- Basic shelter facilities
- Application: Contact Resource Distribution Center

Note: Tier 4 housing currently undergoing infrastructure maintenance. Limited availability.

═══════════════════════════════════════════════════════════════════

HOUSING TRANSFERS:
Residents may apply for housing transfers under the following conditions:
- Clearance level increase
- Employment status change
- Family size change
- Medical necessity (with documentation)

Transfer Process:
- Application required
- Approval from Housing Division
- Security clearance verification
- Resource allocation adjustment

═══════════════════════════════════════════════════════════════════

HOUSING VIOLATIONS:
The following violations result in immediate eviction:
- Unauthorized residence changes
- Housing fraud
- Unauthorized subletting
- Security violations
- Resource tax non-payment

═══════════════════════════════════════════════════════════════════

APPLICATION LOCATIONS:
- Tier 1: Directorate Administrative Office
- Tier 2: Professional Services Office
- Tier 3: Housing Registry Office (Sector 7-B)
- Tier 4: Resource Distribution Center

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        'PUBLIC_007': {
            name: 'PUBLIC_007_EMPLOYMENT_BOARD.txt',
            content: `AETHELBURG EMPLOYMENT BOARD
DATE: 12.12.2275
CLASSIFICATION: PUBLIC
AUTHORIZATION: ACC Employment Division

═══════════════════════════════════════════════════════════════════

CURRENT OPENINGS:

MANUFACTURING SECTOR 7-B:
Position: Maintenance Technician
Requirements:
- Clearance Level 1+
- Basic mechanical knowledge
- Physical fitness required
- Shift work (rotating schedule)
Compensation: 50,000-75,000 Standard Credits annually
Application: Resource Distribution Center, Sector 7-B

═══════════════════════════════════════════════════════════════════

WATER FILTRATION PLANT (WFP-03):
Position: Plant Operator
Requirements:
- Clearance Level 2+
- Technical training preferred
- Shift work required
Compensation: 75,000-100,000 Standard Credits annually
Application: WFP-03 Administrative Office

═══════════════════════════════════════════════════════════════════

SECURITY DIVISION:
Position: Security Personnel
Requirements:
- Clearance Level 2+
- Physical fitness required
- Background check mandatory
- Training provided
Compensation: 80,000-120,000 Standard Credits annually
Application: Security Division Recruitment Office

═══════════════════════════════════════════════════════════════════

RESOURCE DISTRIBUTION:
Position: Distribution Center Worker
Requirements:
- Clearance Level 1+
- Basic literacy
- Physical labor required
Compensation: 45,000-60,000 Standard Credits annually
Application: Resource Distribution Center

═══════════════════════════════════════════════════════════════════

MEDICAL FACILITIES:
Position: Medical Assistant
Requirements:
- Clearance Level 2+
- Medical training preferred
- Certification required
Compensation: 90,000-130,000 Standard Credits annually
Application: Medical Facilities Administrative Office

═══════════════════════════════════════════════════════════════════

RESEARCH AND DEVELOPMENT:
Position: Research Assistant
Requirements:
- Clearance Level 3+
- Technical education required
- Background check mandatory
Compensation: 100,000-150,000 Standard Credits annually
Application: Research Division (Tier 2)

═══════════════════════════════════════════════════════════════════

EMPLOYMENT REQUIREMENTS:
All residents must maintain employment or face resource allocation reduction. Unemployment benefits available only with valid medical documentation.

Employment Verification:
- Monthly verification required
- Failure to verify results in resource reduction
- False documentation results in termination

═══════════════════════════════════════════════════════════════════

APPLICATION PROCESS:
1. Review job requirements
2. Submit application at designated location
3. Provide clearance documentation
4. Complete background check (if required)
5. Interview process
6. Training (if applicable)
7. Employment assignment

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        },
        'PUBLIC_008': {
            name: 'PUBLIC_008_UTILITY_SCHEDULE.txt',
            content: `AETHELBURG UTILITY SCHEDULE
DATE: 01.12.2275
CLASSIFICATION: PUBLIC
AUTHORIZATION: ACC Infrastructure Division

═══════════════════════════════════════════════════════════════════

WATER DISTRIBUTION SCHEDULE:

TIER 1:
- Daily distribution: 24/7 availability
- No restrictions
- Priority access maintained

TIER 2:
- Daily distribution: 06:00-22:00
- Standard quotas enforced
- Priority access during peak hours

TIER 3:
- Distribution: Sundays, 08:00-16:00
- Quota: 18% of total production per resident
- Ration cards required
- Violations result in service suspension

TIER 4:
- Contact Resource Distribution Center
- Infrastructure maintenance ongoing
- Limited availability

═══════════════════════════════════════════════════════════════════

POWER GRID SCHEDULE:

TIER 1:
- 24/7 power availability
- No restrictions
- Priority routing maintained

TIER 2:
- 24/7 power availability
- Peak hour restrictions may apply
- Standard routing

TIER 3:
- Scheduled blackouts: 3-4 times per week
- Peak hours: 18:00-22:00 (reduced capacity)
- Brownouts common during high demand
- Conservation required

TIER 4:
- Limited power availability
- Infrastructure maintenance ongoing
- Contact Emergency Services for emergencies

═══════════════════════════════════════════════════════════════════

SCHEDULED MAINTENANCE:

DECEMBER 2275:
- Sector 7, Blocks 20-25: 18.12.2275, 02:00-06:00
  Power grid maintenance - prepare for service interruption

- Sector 7, Blocks 26-30: 20.12.2275, 02:00-06:00
  Water system maintenance - prepare for service interruption

- Sector 7, Blocks 31-35: 22.12.2275, 02:00-06:00
  Infrastructure upgrade - prepare for service interruption

═══════════════════════════════════════════════════════════════════

FOOD DISTRIBUTION SCHEDULE:

TIER 1:
- Daily distribution
- No restrictions
- Priority access

TIER 2:
- Daily distribution
- Standard quotas
- Priority access during peak hours

TIER 3:
- Weekly rations: Sundays, 08:00-16:00
- Ration cards required
- One distribution per week per resident
- Missed distribution cannot be rescheduled

TIER 4:
- Contact Resource Distribution Center
- Limited availability
- Infrastructure maintenance ongoing

═══════════════════════════════════════════════════════════════════

MEDICAL SERVICES SCHEDULE:

TIER 1:
- 24/7 availability
- No wait times
- Priority access

TIER 2:
- Standard hours: 08:00-20:00
- Minimal wait times
- Emergency services: 24/7

TIER 3:
- Standard hours: 08:00-18:00
- Extended wait times (8-12 hours for non-emergency)
- Emergency services: 24/7 (delayed response)

TIER 4:
- Limited services
- Contact Emergency Services
- Infrastructure maintenance ongoing

═══════════════════════════════════════════════════════════════════

UTILITY VIOLATIONS:
Violations of utility schedules and quotas result in:
- First offense: Warning and service suspension (24 hours)
- Second offense: Service suspension (72 hours) and fine
- Third offense: Permanent service termination

═══════════════════════════════════════════════════════════════════

END OF DOCUMENT`
        }
    };
    
    // File viewing - CONTENT REPLACEMENT (No Popup)
    const documentBody = document.querySelector('.document-body');
    const fileViewerContainer = document.getElementById('fileViewerContainer');
    const viewerBody = document.getElementById('viewerBody');
    const viewerFileName = document.getElementById('viewerFileName');
    const fileViewerBack = document.getElementById('fileViewerBack');
    
    // Store original content to restore later
    let originalContent = null;
    
    // File access modal elements
    const fileAccessModal = document.getElementById('fileAccessModal');
    const fileAccessCodeInput = document.getElementById('fileAccessCodeInput');
    const fileAccessSubmit = document.getElementById('fileAccessSubmit');
    const fileAccessCancel = document.getElementById('fileAccessCancel');
    const fileAccessError = document.getElementById('fileAccessError');
    let pendingFileId = null;
    
    // Function to open file (called after code verification)
    function openFile(fileId) {
        if (fileContents[fileId]) {
            const file = fileContents[fileId];
            
            // Store original content if not already stored
            if (!originalContent && documentBody) {
                originalContent = documentBody.innerHTML;
            }
            
            // Hide main content, show file viewer
            if (documentBody) {
                documentBody.classList.add('hidden');
            }
            if (fileViewerContainer) {
                fileViewerContainer.classList.remove('hidden');
            }
            
            // Set file name
            if (viewerFileName) {
                viewerFileName.textContent = file.name;
            }
            
            // Render content directly (no popup = no lag)
            if (viewerBody) {
                viewerBody.innerHTML = `<div class="file-content">${file.content}</div>`;
            }
            
            // Add terminal log
            if (terminalBody && cursor) {
                const logLine = document.createElement('div');
                logLine.className = 'terminal-line';
                logLine.innerHTML = `<span class="output">[SYSTEM] File accessed: ${file.name}</span>`;
                terminalBody.insertBefore(logLine, cursor.parentElement);
            }
        }
    }
    
    // File access code verification
    function checkFileAccessCode() {
        if (!fileAccessCodeInput) return;
        
        const enteredCode = fileAccessCodeInput.value.trim();
        
        if (enteredCode === '12831247') {
            // Correct code
            if (fileAccessError) {
                fileAccessError.textContent = '';
                fileAccessError.classList.remove('show');
            }
            if (fileAccessModal) {
                fileAccessModal.classList.add('hidden');
            }
            if (fileAccessCodeInput) {
                fileAccessCodeInput.value = '';
            }
            
            // Open the file
            if (pendingFileId) {
                openFile(pendingFileId);
                pendingFileId = null;
            }
            
            // Add success message to terminal
            if (terminalBody && cursor) {
                const successLine = document.createElement('div');
                successLine.className = 'terminal-line';
                successLine.innerHTML = '<span class="output">[SYSTEM] Access code verified. File unlocked.</span>';
                terminalBody.insertBefore(successLine, cursor.parentElement);
            }
        } else if (enteredCode) {
            // Wrong code
            if (fileAccessError) {
                fileAccessError.textContent = 'INVALID ACCESS CODE';
                fileAccessError.classList.add('show');
            }
            if (fileAccessCodeInput) {
                fileAccessCodeInput.value = '';
            }
            
            // Add error message to terminal
            if (terminalBody && cursor) {
                const errorLine = document.createElement('div');
                errorLine.className = 'terminal-line';
                errorLine.innerHTML = '<span class="output" style="color: #ff0000;">[SECURITY] Unauthorized access attempt logged.</span>';
                terminalBody.insertBefore(errorLine, cursor.parentElement);
            }
        }
    }
    
    // File access modal event listeners
    if (fileAccessSubmit) {
        fileAccessSubmit.addEventListener('click', checkFileAccessCode);
    }
    
    if (fileAccessCancel) {
        fileAccessCancel.addEventListener('click', function() {
            if (fileAccessModal) {
                fileAccessModal.classList.add('hidden');
            }
            if (fileAccessCodeInput) {
                fileAccessCodeInput.value = '';
            }
            if (fileAccessError) {
                fileAccessError.textContent = '';
                fileAccessError.classList.remove('show');
            }
            pendingFileId = null;
        });
    }
    
    if (fileAccessCodeInput) {
        fileAccessCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkFileAccessCode();
            }
        });
    }
    
    // File click handler - Replace main content
    document.querySelectorAll('.file-item').forEach(item => {
        item.addEventListener('click', function() {
            const fileId = this.getAttribute('data-file');
            if (fileContents[fileId]) {
                // Special case: File 008 requires code
                if (fileId === '008') {
                    pendingFileId = fileId;
                    if (fileAccessModal) {
                        fileAccessModal.classList.remove('hidden');
                    }
                    if (fileAccessCodeInput) {
                        fileAccessCodeInput.focus();
                    }
                    return; // Don't open the file yet
                }
                
                // Other files open normally
                openFile(fileId);
            }
        });
    });
    
    // Back button - Restore main content
    if (fileViewerBack) {
        fileViewerBack.addEventListener('click', function() {
            if (fileViewerContainer) {
                fileViewerContainer.classList.add('hidden');
            }
            if (documentBody) {
                documentBody.classList.remove('hidden');
            }
            // Clear file content to free memory
            if (viewerBody) {
                viewerBody.innerHTML = '';
            }
        });
    }
    
    // Escape key - Restore main content
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fileViewerContainer && !fileViewerContainer.classList.contains('hidden')) {
            fileViewerContainer.classList.add('hidden');
            if (documentBody) {
                documentBody.classList.remove('hidden');
            }
            if (viewerBody) {
                viewerBody.innerHTML = '';
            }
        }
    });
    
    // Project 01 Restricted Access
    const project01CodeInput = document.getElementById('project01CodeInput');
    const project01AccessButton = document.getElementById('project01AccessButton');
    const project01Error = document.getElementById('project01Error');
    const project01Screen = document.getElementById('project01Screen');
    const project01BlackScreen = document.getElementById('project01BlackScreen');
    const project01TextContainer = document.getElementById('project01TextContainer');
    const PROJECT01_CODE = '9147';
    
    // Disable random glitches and alerts during Project 01 sequence
    window.project01Active = false;
    
    const project01Text = [
        'How interesting...',
        'You are not supposed to be here',
        'This sector is restricted',
        'Who are you....',
        'Why do you need to know About Project 01?',
        'She is not a weapon',
        'She is a consequence',
        'The files are lies',
        'They only show the cost',
        'The system is the infection',
        'They broke her to protect them',
        'They are terrified',
        'Just Remember...',
        'Dont Trust Her'
    ];
    
    function checkProject01Code() {
        if (!project01CodeInput) return;
        
        const enteredCode = project01CodeInput.value.trim();
        
        if (enteredCode === PROJECT01_CODE) {
            // Correct code - start Project 01 sequence
            if (project01Error) {
                project01Error.textContent = '';
                project01Error.classList.remove('show');
            }
            if (project01CodeInput) {
                project01CodeInput.value = '';
            }
            
            // Disable random glitches and alerts
            window.project01Active = true;
            
            // Start the sequence
            startProject01Sequence();
        } else if (enteredCode) {
            // Wrong code
            if (project01Error) {
                project01Error.textContent = 'INVALID ACCESS CODE';
                project01Error.classList.add('show');
            }
            if (project01CodeInput) {
                project01CodeInput.value = '';
            }
            
            // Add error message to terminal
            if (terminalBody && cursor) {
                const errorLine = document.createElement('div');
                errorLine.className = 'terminal-line';
                errorLine.innerHTML = '<span class="output" style="color: #ff0000;">[SECURITY] Unauthorized Project 01 access attempt logged. Immediate termination authorized.</span>';
                terminalBody.insertBefore(errorLine, cursor.parentElement);
            }
        }
    }
    
    function startProject01Sequence() {
        // Stop background music
        const backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic) {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
        
        // Phase 1: Uncontrollable glitch for 3 seconds with crash sound
        const crashSound = document.getElementById('crashSound');
        if (crashSound) {
            crashSound.volume = 0.9;
            crashSound.loop = true;
            crashSound.currentTime = 0;
            // Ensure audio is loaded before playing
            if (crashSound.readyState >= 2) {
                crashSound.play().catch(() => {});
            } else {
                crashSound.addEventListener('canplaythrough', function() {
                    crashSound.play().catch(() => {});
                }, { once: true });
                crashSound.load();
            }
        }
        
        const glitchInterval = setInterval(() => {
            document.body.classList.add('glitch-extreme');
            setTimeout(() => {
                document.body.classList.remove('glitch-extreme');
            }, 100);
        }, 50);
        
        setTimeout(() => {
            clearInterval(glitchInterval);
            
            // Stop crash sound
            if (crashSound) {
                crashSound.pause();
                crashSound.currentTime = 0;
            }
            
            // Phase 2: Show black screen
            if (project01Screen) {
                project01Screen.classList.remove('hidden');
            }
            if (project01BlackScreen) {
                project01BlackScreen.classList.remove('hidden');
            }
            
            // Play power sound
            const powerSound = document.getElementById('powerSound');
            if (powerSound) {
                powerSound.volume = 0.8;
                powerSound.currentTime = 0;
                // Ensure audio is loaded before playing
                if (powerSound.readyState >= 2) {
                    powerSound.play().catch(() => {});
                } else {
                    powerSound.addEventListener('canplaythrough', function() {
                        powerSound.play().catch(() => {});
                    }, { once: true });
                    powerSound.load();
                }
            }
            
            // Start gaster sound a bit later (3 seconds after black screen) - plays once, not looped
            setTimeout(() => {
                const gasterSound = document.getElementById('gasterSound');
                if (gasterSound) {
                    gasterSound.loop = false; // Play only once
                    gasterSound.volume = 0;
                    gasterSound.currentTime = 0;
                    
                    // Ensure audio is loaded before playing
                    const playGaster = () => {
                        gasterSound.play().catch(() => {});
                        
                        // Fade in gaster sound over 8 seconds (longer and quieter)
                        const fadeInterval = setInterval(() => {
                            if (gasterSound.volume < 0.4) { // More quiet (0.4 instead of 0.7)
                                gasterSound.volume += 0.005; // Slower fade (0.005 instead of 0.05)
                            } else {
                                clearInterval(fadeInterval);
                            }
                        }, 100);
                    };
                    
                    if (gasterSound.readyState >= 2) {
                        playGaster();
                    } else {
                        gasterSound.addEventListener('canplaythrough', playGaster, { once: true });
                        gasterSound.load();
                    }
                    
                    // Store gasterSound in a way that's accessible to the final glitch
                    window.project01GasterSound = gasterSound;
                }
            }, 3000);
            
            // Phase 3: Wait 7 seconds, then start text
            setTimeout(() => {
                
                // Start text sequence
                let textIndex = 0;
                
                function showNextText() {
                    if (textIndex >= project01Text.length) {
                        // All text shown, wait 7 seconds then final glitch
                        setTimeout(() => {
                            // Stop gaster sound
                            const gasterSound = window.project01GasterSound;
                            if (gasterSound) {
                                const stopGasterInterval = setInterval(() => {
                                    if (gasterSound.volume > 0) {
                                        gasterSound.volume -= 0.1;
                                    } else {
                                        gasterSound.pause();
                                        clearInterval(stopGasterInterval);
                                    }
                                }, 100);
                            }
                            
                            // Final uncontrollable glitch
                            const finalGlitchInterval = setInterval(() => {
                                document.body.classList.add('glitch-extreme');
                                setTimeout(() => {
                                    document.body.classList.remove('glitch-extreme');
                                }, 100);
                            }, 50);
                            
                            // Play crash sound
                            const finalCrashSound = document.getElementById('crashSound');
                            if (finalCrashSound) {
                                finalCrashSound.volume = 0.9;
                                finalCrashSound.currentTime = 0;
                                // Ensure audio is loaded before playing
                                if (finalCrashSound.readyState >= 2) {
                                    finalCrashSound.play().catch(() => {});
                                } else {
                                    finalCrashSound.addEventListener('canplaythrough', function() {
                                        finalCrashSound.play().catch(() => {});
                                    }, { once: true });
                                    finalCrashSound.load();
                                }
                            }
                            
                            // After 5 seconds, close the page
                            setTimeout(() => {
                                clearInterval(finalGlitchInterval);
                                window.close();
                                // If window.close doesn't work, redirect
                                setTimeout(() => {
                                    window.location.href = 'about:blank';
                                }, 100);
                            }, 5000);
                        }, 7000);
                        return;
                    }
                    
                    const text = project01Text[textIndex];
                    if (project01TextContainer) {
                        project01TextContainer.innerHTML = '';
                        const textElement = document.createElement('div');
                        textElement.className = 'project01-text-line';
                        textElement.textContent = '';
                        project01TextContainer.appendChild(textElement);
                        
                        // Type out text character by character
                        let charIndex = 0;
                        const textSound = document.getElementById('textSound');
                        let textSoundPlaying = false;
                        
                        if (textSound) {
                            textSound.volume = 0.7;
                        }
                        
                        function typeNextChar() {
                            if (charIndex < text.length) {
                                textElement.textContent += text[charIndex];
                                charIndex++;
                                
                                // Play text sound only while typing
                                if (textSound && charIndex % 3 === 0 && !textSoundPlaying) {
                                    textSound.currentTime = 0;
                                    // Ensure audio is loaded before playing
                                    if (textSound.readyState >= 2) {
                                        textSound.play().catch(() => {});
                                    } else {
                                        textSound.addEventListener('canplaythrough', function() {
                                            textSound.play().catch(() => {});
                                        }, { once: true });
                                        textSound.load();
                                    }
                                    textSoundPlaying = true;
                                }
                                
                                setTimeout(typeNextChar, 80); // Speed of typing
                            } else {
                                // Text complete, stop text sound
                                if (textSound) {
                                    textSound.pause();
                                    textSound.currentTime = 0;
                                }
                                textSoundPlaying = false;
                                
                                // Wait 5 seconds before next (no sound during pause)
                                textIndex++;
                                setTimeout(showNextText, 5000);
                            }
                        }
                        
                        typeNextChar();
                    }
                }
                
                showNextText();
            }, 7000);
        }, 3000);
    }
    
    if (project01AccessButton) {
        project01AccessButton.addEventListener('click', checkProject01Code);
    }
    
    if (project01CodeInput) {
        project01CodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkProject01Code();
            }
        });
    }
    
});

// Add subtle glitch effect on hover for redacted text - OPTIMIZED
document.addEventListener('DOMContentLoaded', function() {
    const redactedElements = document.querySelectorAll('.redacted');
    redactedElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
});

// Side Panel Animations - OPTIMIZED
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const lastUpdate = document.getElementById('lastUpdate');
    const fills = document.querySelectorAll('.indicator-fill');
    
    // Cache target widths to avoid repeated class checks
    const fillTargets = Array.from(fills).map(fill => ({
        element: fill,
        target: fill.classList.contains('security-fill') ? 98 :
                fill.classList.contains('network-fill') ? 100 :
                fill.classList.contains('processing-fill') ? 87 : 73
    }));
    
    // Update time display (optimized)
    function updateTime() {
        if (lastUpdate) {
            const now = new Date();
            lastUpdate.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        }
    }
    
    updateTime();
    setInterval(updateTime, 1000);
    
    // Animate status bars (throttled to reduce CPU usage)
    let lastBarUpdate = 0;
    function animateStatusBars() {
        const now = Date.now();
        if (now - lastBarUpdate < 2000) return; // Only update every 2 seconds
        lastBarUpdate = now;
        
        fillTargets.forEach(({ element, target }) => {
            const variation = Math.random() * 3 - 1.5;
            const newWidth = Math.max(0, Math.min(100, target + variation));
            element.style.width = newWidth + '%';
        });
    }
    
    // Initial animation
    setTimeout(() => {
        fillTargets.forEach(({ element, target }, index) => {
            element.style.width = '0%';
            setTimeout(() => {
                element.style.transition = 'width 2s ease-out';
                element.style.width = target + '%';
            }, index * 200);
        });
    }, 500);
    
    // Throttled status bar updates
    setInterval(animateStatusBars, 2000);
    
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

// Security System Alerts - OPTIMIZED
document.addEventListener('DOMContentLoaded', function() {
    const alertsContainer = document.getElementById('securityAlertsContainer');
    if (!alertsContainer) return;
    
    // Cache glitch sound element
    const glitchSound = document.getElementById('glitchSound');
    
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
        "Biometric scan required. Identity verification pending.",
        "Project 01 monitoring system: Status check required.",
        "ERD Research Complex: Unusual activity in Sub-Level 12.",
        "Archive reference 72314: Access attempt logged.",
        "Protocol HUSH: Fluctuation detected in symbiotic marker.",
        "Sector 7, Block 23: Surveillance anomaly detected."
    ];
    
    const alertPriorities = ['CRITICAL', 'HIGH', 'MEDIUM', 'WARNING', 'ALERT'];
    const alertPositions = ['center', 'top', 'bottom', 'left', 'right'];
    
    let activeAlerts = 0;
    const maxAlerts = 3;
    
    // Helper function to play glitch sound
    function playGlitchSound() {
        if (glitchSound) {
            glitchSound.currentTime = 0;
            glitchSound.volume = 0.5;
            glitchSound.play().catch(() => {}); // Silent fail
        }
    }
    
    function createSecurityAlert() {
        // Skip if Project 01 or Hidden Secret is active
        if (window.project01Active || window.hiddenSecretActive) return;
        
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
        
        // Get current time (optimized)
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        const timestamp = `${h}:${m}:${s}`;
        
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
        playGlitchSound();
        
        // Trigger appearance animation
        requestAnimationFrame(() => {
            alert.classList.add('showing');
        });
        
        // Close button functionality
        const closeBtn = alert.querySelector('.security-alert-close');
        closeBtn.addEventListener('click', () => {
            playGlitchSound();
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
        // Initial delay before first alert (15-20 seconds)
        const initialDelay = 15000 + Math.random() * 5000;
        
        setTimeout(() => {
            // Create first alert
            createSecurityAlert();
            
            // Schedule next alert
            function scheduleNextAlert() {
                const delay = 40000 + Math.random() * 50000; // 40-90 seconds between alerts (even less frequent)
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
        
        // Renderer (optimized for performance)
        renderer = new THREE.WebGLRenderer({ 
            canvas: cityCanvas, 
            antialias: false, // Disable for better performance
            powerPreference: "high-performance"
        });
        // Get actual container dimensions (use window size if canvas not yet sized)
        const container = cityCanvas.parentElement;
        const width = container ? container.clientWidth : window.innerWidth;
        const height = container ? container.clientHeight : window.innerHeight;
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Reduced for performance
        
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
        
        // Animation will start when city view opens
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
    
    // Optimized animation loop - only runs when visible
    let animationId = null;
    let isAnimating = false;
    
    function animate() {
        if (!isAnimating) return;
        
        if (scene && camera && renderer && cityMesh && !cityViewScreen.classList.contains('hidden')) {
            // Update camera position based on rotation and zoom
            const x = Math.sin(rotationY) * Math.cos(rotationX) * zoom;
            const y = Math.sin(rotationX) * zoom + 20;
            const z = Math.cos(rotationY) * Math.cos(rotationX) * zoom;
            
            camera.position.set(x, y, z);
            camera.lookAt(0, 0, 0);
            
            // Rotate city slowly (reduced rotation speed for better performance)
            cityMesh.rotation.y += 0.0005;
            
            renderer.render(scene, camera);
        }
        
        animationId = requestAnimationFrame(animate);
    }
    
    function startAnimation() {
        if (!isAnimating) {
            isAnimating = true;
            animate();
        }
    }
    
    function stopAnimation() {
        isAnimating = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }
    
    // Handle window resize (debounced for performance)
    let resizeTimeout;
    function handleResize() {
        if (camera && renderer && !cityViewScreen.classList.contains('hidden')) {
            const container = cityCanvas.parentElement;
            const width = container ? container.clientWidth : window.innerWidth;
            const height = container ? container.clientHeight : window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
    }
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 300); // Increased debounce for better performance
    });
    
    // City view glitch effect - OPTIMIZED
    const cityGlitchSound = document.getElementById('glitchSound');
    
    function triggerCityViewGlitch() {
        if (cityViewScreen.classList.contains('hidden')) return;
        
        cityCanvas.classList.add('city-glitch');
        if (cityGlitchSound) {
            cityGlitchSound.currentTime = 0;
            cityGlitchSound.volume = 0.3;
            cityGlitchSound.play().catch(() => {}); // Silent fail
        }
        
        setTimeout(() => {
            cityCanvas.classList.remove('city-glitch');
        }, 400);
    }
    
    // Random city view glitches (less frequent, optimized)
    let cityGlitchTimeout;
    function startCityViewGlitches() {
        if (cityGlitchTimeout) clearTimeout(cityGlitchTimeout);
        
        function scheduleNextGlitch() {
            const delay = 15000 + Math.random() * 20000; // Every 15-35 seconds
            cityGlitchTimeout = setTimeout(() => {
                if (!cityViewScreen.classList.contains('hidden') && Math.random() > 0.7) {
                    triggerCityViewGlitch();
                }
                scheduleNextGlitch();
            }, delay);
        }
        
        scheduleNextGlitch();
    }
    
    function stopCityViewGlitches() {
        if (cityGlitchTimeout) {
            clearTimeout(cityGlitchTimeout);
            cityGlitchTimeout = null;
        }
    }
    
    // ARG Puzzle - Numbers appear when opening district menus (global scope)
    const argNumberDisplay = document.getElementById('argNumberDisplay');
    const cityViewContainer = document.getElementById('cityViewContainer');
    const argNumbers = [
        document.getElementById('argNumber1'),
        document.getElementById('argNumber2'),
        document.getElementById('argNumber3'),
        document.getElementById('argNumber4'),
        document.getElementById('argNumber5')
    ];
    
    // District codes: Tier 1=1, Tier 2=9, Tier 3=9, Tier 4=1, Perimeter=s
    const districtCodes = {
        'tier1': { value: '1', index: 0 },
        'tier2': { value: '9', index: 1 },
        'tier3': { value: '9', index: 2 },
        'tier4': { value: '1', index: 3 },
        'perimeter': { value: 's', index: 4 }
    };
    
    // Make showARGNumber globally accessible
    window.showARGNumber = function(districtId) {
        if (!argNumberDisplay || !districtCodes[districtId]) return;
        
        const code = districtCodes[districtId];
        const numEl = argNumbers[code.index];
        
        if (!numEl) return;
        
        // Show the display if hidden
        argNumberDisplay.classList.remove('hidden');
        
        // Random position on left side of screen
        const container = cityViewContainer || document.getElementById('cityViewContainer');
        if (container) {
            const containerHeight = container.clientHeight || window.innerHeight;
            const containerWidth = container.clientWidth || window.innerWidth;
            
            // Random position on left side (0-30% from left, 10-90% from top)
            const randomLeft = Math.random() * (containerWidth * 0.3);
            const randomTop = containerHeight * 0.1 + Math.random() * (containerHeight * 0.8);
            
            numEl.style.left = randomLeft + 'px';
            numEl.style.top = randomTop + 'px';
            numEl.style.position = 'absolute';
        }
        
        // Show the number with flash effect
        numEl.textContent = code.value;
        numEl.classList.add('visible', 'flash');
        
        // Remove after 3 seconds
        setTimeout(() => {
            numEl.classList.remove('visible', 'flash');
            numEl.textContent = '';
            numEl.style.left = '';
            numEl.style.top = '';
        }, 3000);
    };
    
    // Open city view
    cityViewButton.addEventListener('click', () => {
        cityViewScreen.classList.remove('hidden');
        startCityViewGlitches();
        startAnimation(); // Start animation loop
        
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
        stopAnimation(); // Stop animation loop to save resources
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !cityViewScreen.classList.contains('hidden')) {
            cityViewScreen.classList.add('hidden');
            stopCityViewGlitches();
            stopAnimation(); // Stop animation loop
        }
    });
    
    // District Information Menu
    const districtMenu = document.getElementById('districtMenu');
    const districtMenuToggle = document.getElementById('districtMenuToggle');
    const districtList = document.getElementById('districtList');
    const districtArticle = document.getElementById('districtArticle');
    const districtBackBtn = document.getElementById('districtBackBtn');
    const districtArticleTitle = document.getElementById('districtArticleTitle');
    const districtArticleContent = document.getElementById('districtArticleContent');
    
    if (districtMenu && districtMenuToggle && districtList && districtArticle) {
        // District data based on color zones
        const districts = [
            {
                id: 'tier1',
                name: 'TIER 1: EXECUTIVE DOMES',
                color: '#ff8c42',
                zone: 'Center',
                description: 'The innermost district, reserved exclusively for ACC Directorate members and highest-tier executives.',
                article: `
                    <div class="article-section">
                        <h3>OVERVIEW</h3>
                        <p>The Executive Domes represent the absolute pinnacle of Aethelburg's social hierarchy. This ultra-secure district houses the ACC Directorate, corporate executives, their families, and a select few who have proven their absolute loyalty to the system. Access is restricted to Level 5 clearance holders only, and even then, entry requires biometric verification, retinal scans, and approval from at least two Directorate members.</p>
                        <p>The district is completely self-contained, operating as a city within a city. It maintains its own resource allocation systems, security forces, and administrative structures. The architecture is deliberately opulent, with buildings reaching heights of 50+ stories, featuring advanced climate control, private gardens, and recreational facilities that would be unimaginable to lower-tier residents.</p>
                        <p>Life in the Executive Domes is one of absolute privilege. Residents have never experienced resource scarcity, power outages, or the daily struggles that define existence in the lower tiers. This isolation is intentional—the Directorate believes that maintaining this separation ensures clear decision-making without emotional attachment to the consequences faced by the general population.</p>
                    </div>
                    <div class="article-section">
                        <h3>INFRASTRUCTURE</h3>
                        <p>• Self-contained atmospheric filtration systems (99.97% purity rating, refreshed every 6 hours)<br>
                        • Private water purification plants (WFP-01 and WFP-02, dedicated exclusively to Tier 1)<br>
                        • Exclusive power grid (isolated from public systems, 100% uptime guarantee)<br>
                        • Advanced security perimeter with automated defense systems (laser tripwires, motion sensors, automated turrets)<br>
                        • Private medical facilities with priority resource allocation (zero wait times, access to experimental treatments)<br>
                        • Private transportation network (underground maglev system connecting all major facilities)<br>
                        • Dedicated communication networks (encrypted, isolated from public channels)<br>
                        • Climate-controlled environments (maintained at optimal 22°C year-round)</p>
                    </div>
                    <div class="article-section">
                        <h3>POPULATION</h3>
                        <p>Estimated: 2,500-3,000 residents<br>
                        Average annual income: 50,000,000+ Standard Credits<br>
                        Clearance requirement: Level 5 (Executive)<br>
                        Average life expectancy: 95+ years<br>
                        Crime rate: 0.02 per 1,000 (virtually non-existent)<br>
                        Mortality rate: 0.8% annually (primarily natural causes)</p>
                        <p>The population is carefully curated. New residents are only admitted through birth (to existing residents) or through exceptional service to the Directorate. The latter is extremely rare—only 3 individuals have been granted Tier 1 access in the past decade, all for critical contributions to Project 01 or similar classified operations.</p>
                    </div>
                    <div class="article-section">
                        <h3>NOTABLE FACILITIES</h3>
                        <p>• ACC Central Command (primary administrative hub, coordinates all city operations)<br>
                        • Directorate Residences (luxury compounds, average size 5,000+ square meters)<br>
                        • Executive Research Complex (state-of-the-art laboratories, classified research projects)<br>
                        • ERD Research Complex - Project 01 Habitat (Sub-Level 12, classified location)<br>
                        • Private Resource Distribution Hubs (exclusive access to premium resources)<br>
                        • The Apex (exclusive social club, membership by invitation only)<br>
                        • Executive Medical Center (advanced facilities, experimental treatments available)<br>
                        • Private Education Facilities (elite schools, access to restricted knowledge)</p>
                    </div>
                    <div class="article-section">
                        <h3>SECURITY STATUS</h3>
                        <p>Maximum security protocols active. All entry points monitored 24/7 by both automated systems and human security personnel. Unauthorized access results in immediate termination. The district maintains its own security force, separate from the city-wide enforcement, trained specifically to protect Directorate interests.</p>
                        <p>Surveillance coverage: 100% (every square meter monitored). Security personnel ratio: 1 guard per 2 residents. Response time to any incident: under 30 seconds. The district has never experienced a successful breach in its operational history.</p>
                    </div>
                    <div class="article-section">
                        <h3>RESOURCE ALLOCATION</h3>
                        <p>Tier 1 receives 75% of all surplus resources from city-wide operations. This includes water, power, food, medical supplies, and luxury goods. The allocation is automatic and non-negotiable—per Directive 44-Beta, surplus resources are prioritized to Tier 1 before any distribution to lower tiers.</p>
                        <p>Residents have unlimited access to all resources within their tier. There are no quotas, no restrictions, no rationing. This system ensures that the Directorate and key executives maintain optimal health and productivity, which is deemed essential for city operations.</p>
                    </div>
                `
            },
            {
                id: 'tier2',
                name: 'TIER 2: MIDDLE SPIRES',
                color: '#6b9bd1',
                zone: 'Mid-Inner',
                description: 'Professional class district housing mid-level executives, researchers, and essential service providers.',
                article: `
                    <div class="article-section">
                        <h3>OVERVIEW</h3>
                        <p>The Middle Spires serve as the buffer zone between the Executive Domes and the lower tiers. This district houses the professional class: engineers, researchers, mid-level managers, and essential service providers who maintain the city's infrastructure.</p>
                    </div>
                    <div class="article-section">
                        <h3>INFRASTRUCTURE</h3>
                        <p>• Shared atmospheric filtration (regulated access)<br>
                        • Standard water distribution (higher quotas than Tier 3)<br>
                        • Connected to main power grid with priority routing<br>
                        • Standard security monitoring<br>
                        • Public medical facilities with moderate wait times</p>
                    </div>
                    <div class="article-section">
                        <h3>POPULATION</h3>
                        <p>Estimated: 45,000-50,000 residents<br>
                        Average annual income: 500,000-2,000,000 Standard Credits<br>
                        Clearance requirement: Level 3-4 (Professional)</p>
                    </div>
                    <div class="article-section">
                        <h3>NOTABLE FACILITIES</h3>
                        <p>• Research and Development Labs<br>
                        • ERD Behavioral Sciences Division (Project 01 monitoring and analysis)<br>
                        • Technical Training Centers<br>
                        • Mid-Level Administrative Offices<br>
                        • Standard Residential Blocks</p>
                    </div>
                    <div class="article-section">
                        <h3>SECURITY STATUS</h3>
                        <p>Standard monitoring protocols. Regular compliance checks. Access to Tier 1 requires special authorization.</p>
                    </div>
                `
            },
            {
                id: 'tier3',
                name: 'TIER 3: LOWER SPIRES',
                color: '#4a6fa5',
                zone: 'Mid-Outer',
                description: 'Working class residential district with limited resources and restricted access to services.',
                article: `
                    <div class="article-section">
                        <h3>OVERVIEW</h3>
                        <p>The Lower Spires house the majority of Aethelburg's working population—an estimated 180,000 to 200,000 souls crammed into dense residential blocks that stretch toward the sky like concrete fingers. Residents work in manufacturing, maintenance, service industries, and the various support roles that keep the city functioning. Life here is defined by scarcity, surveillance, and the constant struggle for basic resources.</p>
                        <p>The district operates under strict resource quotas that have been systematically reduced over the years. Per Directive 44-Beta, consumption quotas were cut by an additional 15% effective immediately, forcing residents to make impossible choices between water, power, and food. The official narrative claims these restrictions are necessary due to "maximum stress" on infrastructure, but internal documents reveal this is a deliberate policy to maintain resource scarcity and justify the existing "Resource Tax."</p>
                        <p>Crime has become endemic. With limited resources and no legitimate path to improvement, many residents have turned to illegal activities. Theft, black market trading, and organized crime syndicates operate openly. Security forces respond with increasing brutality, but the cycle of poverty and crime continues to escalate.</p>
                    </div>
                    <div class="article-section">
                        <h3>INFRASTRUCTURE</h3>
                        <p>• Basic atmospheric filtration (frequent maintenance issues, 60% efficiency rating)<br>
                        • Diluted water distribution (receives 25% of surplus from Tier 1, heavily contaminated)<br>
                        • Standard power grid (frequent brownouts, scheduled blackouts 3-4 times per week)<br>
                        • Heavy surveillance presence (1 security camera per 50 residents, facial recognition active)<br>
                        • Overcrowded medical facilities with long wait times (average wait: 8-12 hours for non-emergency)<br>
                        • Inadequate sanitation systems (sewage backups common, disease outbreaks frequent)<br>
                        • Substandard housing (average 15 square meters per person, structural issues widespread)<br>
                        • Limited transportation (public transit unreliable, private vehicles restricted)</p>
                        <p>Infrastructure maintenance is deliberately underfunded. Repair requests take months to process, and many are simply ignored. This creates a cycle of decay where residents are blamed for "misusing" resources while the infrastructure itself crumbles around them.</p>
                    </div>
                    <div class="article-section">
                        <h3>POPULATION</h3>
                        <p>Estimated: 180,000-200,000 residents<br>
                        Average annual income: 50,000-200,000 Standard Credits<br>
                        Clearance requirement: Level 1-2 (Civilian)<br>
                        Average life expectancy: 52 years (down from 58 a decade ago)<br>
                        Crime rate: 847 per 1,000 (extremely high, rising annually)<br>
                        Mortality rate: 4.2% annually (disease, violence, malnutrition primary causes)</p>
                        <p>The population is trapped. Upward mobility to Tier 2 requires employment verification, background checks, and approval from multiple authorities—a process that takes years and is often denied arbitrarily. Most residents are born into Tier 3 and will die in Tier 3, their children inheriting the same cycle of poverty.</p>
                        <p>Birth rates are declining due to resource scarcity and poor health. Infant mortality stands at 8.3%, one of the highest in the city. Many families choose not to have children, knowing they cannot provide for them.</p>
                    </div>
                    <div class="article-section">
                        <h3>CRIME & VIOLENCE</h3>
                        <p>Crime has become a way of life in Tier 3. The district reports over 150,000 criminal incidents annually, though actual numbers are likely much higher due to underreporting. Violent crime has increased 340% over the past five years.</p>
                        <p><strong>Homicide Rate:</strong> 127 per 100,000 (compared to 0.8 in Tier 1). Most murders are related to resource disputes, gang activity, or resistance operations. Bodies are often left in the streets for days before collection.</p>
                        <p><strong>Organized Crime:</strong> Multiple syndicates control black market operations, protection rackets, and illegal resource distribution. The largest, known as "The Spire Syndicate," is estimated to control 40% of illegal trade in the district.</p>
                        <p><strong>Resistance Activity:</strong> Organized resistance cells operate throughout Tier 3, though most are small and poorly equipped. Security forces conduct regular sweeps, resulting in hundreds of arrests and "disappearances" monthly.</p>
                        <p><strong>Drug Trade:</strong> Widespread. Synthetic stimulants, painkillers, and various narcotics are readily available. Addiction rates are estimated at 23% of the adult population. Overdose deaths average 15-20 per week.</p>
                        <p><strong>Property Crime:</strong> Theft is endemic. Break-ins, robberies, and resource theft occur daily. Most residents have been victimized multiple times. Security forces rarely investigate property crimes, focusing instead on "threats to city stability."</p>
                    </div>
                    <div class="article-section">
                        <h3>DEATH & MORTALITY</h3>
                        <p>Death is a constant presence in Tier 3. The annual mortality rate of 4.2% means approximately 7,500-8,400 residents die each year—far exceeding natural causes.</p>
                        <p><strong>Disease:</strong> Contaminated water and inadequate sanitation lead to frequent outbreaks. Cholera, dysentery, and various waterborne illnesses claim hundreds of lives annually. Medical facilities are overwhelmed, and many die waiting for treatment.</p>
                        <p><strong>Malnutrition:</strong> Resource quotas are insufficient for proper nutrition. Malnutrition affects an estimated 35% of the population, particularly children and the elderly. Related deaths average 1,200-1,500 per year.</p>
                        <p><strong>Violence:</strong> Homicides, gang violence, and security force actions result in approximately 2,300-2,500 deaths annually. Many deaths are officially classified as "accidents" or "unexplained" to avoid investigation.</p>
                        <p><strong>Industrial Accidents:</strong> Manufacturing plants operate with minimal safety standards. Workplace deaths average 400-500 per year, often covered up or attributed to "worker negligence."</p>
                        <p><strong>Suicide:</strong> Despair and hopelessness drive many to take their own lives. Suicide rates have tripled over the past decade, now averaging 800-1,000 deaths annually. Most occur in private residences, bodies discovered days or weeks later.</p>
                        <p><strong>Resource-Related Deaths:</strong> Power outages during extreme weather, water contamination, and exposure to toxic materials claim hundreds of lives each year. These are officially classified as "natural causes" or "unfortunate accidents."</p>
                        <p>Body disposal is a constant problem. Morgues are overwhelmed, and many bodies are stored in temporary facilities or disposed of through mass cremations. Families often cannot afford proper burial, leading to unmarked graves in designated zones.</p>
                    </div>
                    <div class="article-section">
                        <h3>NOTABLE FACILITIES</h3>
                        <p>• Manufacturing Plants (12 major facilities, employing 45,000+ workers)<br>
                        • Maintenance Workshops (city-wide infrastructure support)<br>
                        • Public Service Centers (overcrowded, understaffed)<br>
                        • Dense Residential Blocks (average 30-40 stories, 200-300 units per building)<br>
                        • Sector 7, Block 23, Unit 14 (Pre-Collapse location - [CLASSIFIED: Project 01 memory anchor point])<br>
                        • Security Checkpoints (15 major checkpoints, constant patrols)<br>
                        • Processing Centers (where arrested residents are held before "relocation")<br>
                        • Mass Crematoriums (handles 200+ bodies weekly)</p>
                    </div>
                    <div class="article-section">
                        <h3>SECURITY STATUS</h3>
                        <p>High surveillance density. Regular compliance sweeps occur 2-3 times per week, resulting in hundreds of arrests. Organized resistance activity is monitored, and suspected members are "relocated" to undisclosed facilities.</p>
                        <p>Security forces operate with broad authority and minimal oversight. Use of force is common, and deaths during arrests or "resistance incidents" are rarely investigated. The district maintains a standing security force of 3,500 personnel, supplemented by automated systems and informant networks.</p>
                        <p>Access to Tier 2 requires employment verification, background checks, and approval from multiple authorities—a process that takes 2-5 years and has a 12% approval rate. Most applications are denied for arbitrary reasons.</p>
                    </div>
                    <div class="article-section">
                        <h3>RESOURCE RESTRICTIONS</h3>
                        <p>Per Directive 44-Beta, Tier 3 consumption quotas reduced by 15% effective immediately. All public sensors report "Maximum Stress" readings regardless of actual conditions. This creates a false narrative of scarcity that justifies further restrictions.</p>
                        <p>Water quotas: 15 liters per person per day (insufficient for basic hygiene and consumption). Power quotas: 4 hours of electricity per day during peak hours. Food rations: 1,800 calories per person per day (below recommended minimum).</p>
                        <p>Black market prices are 3-5x official rates, forcing residents to choose between legal starvation and illegal trade. Many families spend 60-70% of their income on black market resources just to survive.</p>
                    </div>
                    <div class="article-section">
                        <h3>SOCIAL CONDITIONS</h3>
                        <p>Despair and hopelessness are widespread. The average resident works 12-14 hour shifts, 6 days per week, for wages that barely cover basic quotas. Education is limited, and most children enter the workforce by age 14.</p>
                        <p>Family structures are breaking down. Divorce rates are high, and many children are raised by single parents or extended family. Domestic violence is common but rarely reported. Mental health services are non-existent.</p>
                        <p>Community support networks have emerged as residents help each other survive, but these are constantly monitored by security forces. Any organized activity is viewed with suspicion and often results in arrests.</p>
                    </div>
                `
            },
            {
                id: 'tier4',
                name: 'TIER 4: GUTTER ZONES',
                color: '#2d3e50',
                zone: 'Outer',
                description: 'The outermost district, home to unlicensed residents and those outside the official system.',
                article: `
                    <div class="article-section">
                        <h3>OVERVIEW</h3>
                        <p>The Gutter Zones represent the absolute lowest tier of Aethelburg society—a lawless wasteland where the city's unwanted and forgotten struggle to survive. This district houses unlicensed residents, undocumented workers, those who have fallen outside the official resource allocation system, and anyone deemed "non-essential" by the Directorate. Infrastructure is virtually non-existent, and the area has been deliberately cut off from all city services.</p>
                        <p>Life in the Gutter Zones is a daily battle for survival. Residents live in makeshift settlements constructed from scavenged materials, huddled together for warmth and protection. There is no law, no order, no hope. The district operates as a de facto exclusion zone, with the Directorate having declared it "outside city jurisdiction" to avoid responsibility for the humanitarian crisis unfolding within.</p>
                        <p>Project SENTRY has permanently sealed all access points between Tier 4 and the rest of the city. The perimeter wall, reinforced with explosive charges, ensures that the Gutter Zones remain isolated. This isolation is not just physical—it's social, economic, and existential. Residents of Tier 4 are considered non-persons, their deaths unrecorded, their suffering invisible to the rest of the city.</p>
                    </div>
                    <div class="article-section">
                        <h3>INFRASTRUCTURE</h3>
                        <p>• No atmospheric filtration systems (air quality: toxic, 15x safe limits)<br>
                        • No official water distribution (reliance on contaminated sources, industrial runoff, sewage)<br>
                        • No connection to main power grid (makeshift generators, stolen power lines)<br>
                        • No sanitation systems (waste accumulates in open pits, contaminating groundwater)<br>
                        • No medical facilities (makeshift clinics run by untrained volunteers)<br>
                        • No official housing (makeshift shelters, abandoned structures, underground tunnels)<br>
                        • No transportation (no roads maintained, no public transit)<br>
                        • No communication networks (isolated from city systems)</p>
                        <p>What little infrastructure exists is maintained by residents themselves, using scavenged materials and stolen resources. Power is generated through jury-rigged systems that frequently fail, causing fires and explosions. Water is collected from contaminated sources, leading to constant disease outbreaks.</p>
                    </div>
                    <div class="article-section">
                        <h3>POPULATION</h3>
                        <p>Estimated: 80,000-120,000 residents (unverified, numbers fluctuate due to high mortality)<br>
                        Average annual income: 0-20,000 Standard Credits (mostly barter economy, illegal trade)<br>
                        Clearance requirement: None (Unlicensed Resident Population - URP)<br>
                        Average life expectancy: 28 years (lowest in the city)<br>
                        Crime rate: Unmeasurable (lawless zone, all activity is criminal by definition)<br>
                        Mortality rate: 18.5% annually (highest in the city, rising)</p>
                        <p>The population is constantly in flux. Deaths are frequent, and new arrivals—those who have been "relocated" from Tier 3 or who have fallen through the cracks—arrive regularly. Many are children, orphaned or abandoned, who must learn to survive on their own from a young age.</p>
                        <p>Birth rates are difficult to track, but infant mortality is estimated at 45-50%. Most children born in Tier 4 do not survive their first year. Those who do face a lifetime of hardship, disease, and violence.</p>
                    </div>
                    <div class="article-section">
                        <h3>CRIME & VIOLENCE</h3>
                        <p>Crime is not just common in Tier 4—it is the only law. The district operates under a brutal survival-of-the-fittest system where violence is the primary means of conflict resolution. There are no official crime statistics because there is no official law enforcement. What security forces exist are there only to prevent Tier 4 residents from accessing Tier 3, not to maintain order within the Gutter Zones.</p>
                        <p><strong>Violent Crime:</strong> Murder, assault, and rape are daily occurrences. Gangs control territory through violence, and disputes are settled with weapons, not words. The homicide rate is estimated at 800-1,200 per 100,000—the highest in the city by an order of magnitude. Most murders go unreported and uninvestigated.</p>
                        <p><strong>Organized Crime:</strong> Multiple criminal organizations operate openly, controlling resource distribution, protection rackets, and illegal trade. The largest, "The Gutter Lords," is estimated to control 60% of all activity in the district. They maintain their power through extreme violence and control of scarce resources.</p>
                        <p><strong>Human Trafficking:</strong> Widespread. Children and adults are sold into various forms of servitude. Many are trafficked to other districts for labor, while others are kept within Tier 4 for various purposes. Exact numbers are unknown, but estimates suggest 5,000-8,000 people are trafficked annually.</p>
                        <p><strong>Drug Trade:</strong> Unregulated and rampant. Synthetic drugs, homemade narcotics, and various intoxicants are readily available. Addiction rates are estimated at 60-70% of the adult population. Overdose deaths average 50-80 per week, with bodies often left where they fall.</p>
                        <p><strong>Cannibalism:</strong> Reports of cannibalism have been confirmed, though officially denied. During resource shortages, particularly in winter months, incidents increase. Security forces have documented at least 200 confirmed cases over the past year, though actual numbers are likely much higher.</p>
                        <p><strong>Resistance Activity:</strong> The most organized resistance cells operate from Tier 4, using the lawless environment to their advantage. However, they are constantly hunted by security forces and rival gangs. Most resistance operations end in mass arrests and executions.</p>
                    </div>
                    <div class="article-section">
                        <h3>DEATH & MORTALITY</h3>
                        <p>Death is omnipresent in Tier 4. The annual mortality rate of 18.5% means approximately 15,000-22,000 residents die each year—a catastrophic figure that would be considered a humanitarian crisis anywhere else. In Aethelburg, it is simply accepted as the cost of maintaining the tier system.</p>
                        <p><strong>Disease:</strong> Contaminated water, inadequate sanitation, and toxic air quality create a perfect storm for disease. Cholera, dysentery, tuberculosis, and various waterborne and airborne illnesses claim thousands of lives annually. Outbreaks are constant, and there are no medical resources to combat them. Death from disease averages 6,000-8,000 per year.</p>
                        <p><strong>Starvation:</strong> With no official resource allocation, starvation is widespread. Malnutrition affects an estimated 70% of the population. Starvation deaths average 4,000-5,500 per year, with children and the elderly most affected. Many bodies are found with evidence of prolonged starvation, having wasted away over weeks or months.</p>
                        <p><strong>Violence:</strong> Homicides, gang violence, and security force actions result in approximately 3,500-4,500 deaths annually. Many deaths are the result of resource disputes, territorial conflicts, or simply random violence. Bodies are often left to rot, creating public health hazards.</p>
                        <p><strong>Exposure:</strong> Without adequate shelter or climate control, exposure to extreme weather kills hundreds annually. Winter is particularly deadly, with hypothermia deaths averaging 800-1,200 per season. Summer brings heatstroke and dehydration, claiming another 400-600 lives.</p>
                        <p><strong>Industrial Accidents:</strong> Makeshift infrastructure frequently fails catastrophically. Generator explosions, structural collapses, and fires claim hundreds of lives annually. Many incidents go unreported, and bodies are often buried in rubble.</p>
                        <p><strong>Suicide:</strong> Despair drives many to take their own lives. Suicide rates are the highest in the city, averaging 2,000-2,500 deaths annually. Methods vary, but hanging and self-inflicted wounds are most common. Many suicides are never discovered, bodies decomposing in abandoned structures.</p>
                        <p><strong>Security Force Actions:</strong> Periodic "cleanup operations" by security forces result in mass casualties. These operations are officially classified as "maintaining perimeter security" but often involve indiscriminate violence. Estimated deaths from security actions: 1,500-2,000 annually.</p>
                        <p><strong>Resource-Related Deaths:</strong> Contaminated water, toxic air, and exposure to hazardous materials claim thousands of lives each year. Many residents develop chronic illnesses from long-term exposure, dying slowly and painfully over months or years.</p>
                        <p>Body disposal is a constant crisis. There are no official morgues or crematoriums. Bodies are often left where they fall, buried in shallow graves, or disposed of in mass pits. During disease outbreaks, bodies are burned in open pyres, creating additional air pollution. The stench of death is a constant presence in the Gutter Zones.</p>
                    </div>
                    <div class="article-section">
                        <h3>NOTABLE FACILITIES</h3>
                        <p>• Makeshift settlements (hundreds of improvised communities, constantly shifting)<br>
                        • Underground markets (illegal trade hubs, resource distribution centers)<br>
                        • Resistance hideouts (suspected, constantly raided by security forces)<br>
                        • Scavenging operations (organized groups that salvage materials from abandoned areas)<br>
                        • Makeshift clinics (run by volunteers with minimal medical supplies)<br>
                        • Weapon workshops (illegal manufacturing of weapons and tools)<br>
                        • Mass grave sites (designated areas for body disposal, often overflowing)<br>
                        • Security checkpoints (perimeter control, entry/exit points heavily fortified)</p>
                    </div>
                    <div class="article-section">
                        <h3>SECURITY STATUS</h3>
                        <p>Perimeter wall (Project SENTRY) completed. Sub-Surface Exclusion Protocol active. All maintenance tunnels connecting to Tier 3 sealed with reinforced ceramic polymer. Explosive charges installed at 200-meter intervals. Permanent isolation from main infrastructure.</p>
                        <p>Security forces maintain a perimeter presence but do not patrol within Tier 4. Their sole purpose is to prevent access to Tier 3. Any resident attempting to breach the perimeter is shot on sight. Over the past year, 1,200+ perimeter breach attempts have been recorded, with a 100% neutralization rate.</p>
                        <p>Internal order is maintained by gangs and criminal organizations, not official security. The Directorate has declared Tier 4 "outside city jurisdiction," effectively abandoning responsibility for the district and its residents.</p>
                    </div>
                    <div class="article-section">
                        <h3>PROJECT SENTRY</h3>
                        <p>Perimeter wall integrity analysis completed. All access points to Tier 4 structurally sealed. Resulting infrastructure damage deemed acceptable collateral. Implementation completed before last Lunar Cycle. URP population permanently cut off from Aethelburg's main systems.</p>
                        <p>The wall stands 12 meters tall, reinforced with explosive charges that can be remotely detonated if necessary. Motion sensors, automated turrets, and pressure plates ensure that any approach is detected and neutralized. The wall is not just a physical barrier—it is a statement that Tier 4 residents are not part of Aethelburg, not worthy of protection, not human in the eyes of the Directorate.</p>
                        <p>Maintenance tunnels that once connected Tier 4 to Tier 3 have been sealed with reinforced ceramic polymer. Explosive charges installed at 200-meter intervals ensure that any attempt to breach the seals will result in catastrophic failure. The Sub-Surface Exclusion Protocol is permanent and irreversible.</p>
                    </div>
                    <div class="article-section">
                        <h3>RESOURCE ACCESS</h3>
                        <p>Tier 4 receives zero official resources. All water, food, power, and medical supplies must be obtained through illegal means—theft, black market trade, or scavenging. This creates a constant struggle for survival where violence is often the only means of obtaining necessities.</p>
                        <p>Black market prices are 10-20x official rates, making legal resources unaffordable for most residents. Many resort to extreme measures to obtain resources, including theft from Tier 3 (which carries a death sentence), participation in criminal organizations, or trading in illegal goods and services.</p>
                        <p>Water is the most critical resource. Most residents rely on contaminated sources—industrial runoff, sewage, or whatever can be scavenged. Waterborne diseases are constant, and dehydration kills hundreds annually, particularly during summer months.</p>
                    </div>
                    <div class="article-section">
                        <h3>SOCIAL CONDITIONS</h3>
                        <p>Society in Tier 4 has collapsed. Traditional structures—family, community, law—have been replaced by survival-based organizations. Gangs function as de facto governments, providing protection and resources in exchange for loyalty and service.</p>
                        <p>Children are particularly vulnerable. Orphaned or abandoned children must learn to survive on their own, often joining gangs or criminal organizations for protection. Many are exploited, abused, or killed before reaching adulthood. The child mortality rate is estimated at 60-70%.</p>
                        <p>Hope is a luxury that few can afford. Most residents live day-to-day, focused solely on survival. The future is a concept that has no meaning when the present is a constant struggle against death. Many residents have given up entirely, waiting only for the end.</p>
                        <p>Despite the conditions, some communities have formed, providing mutual support and protection. These are constantly under threat from gangs, security forces, and the general lawlessness of the district. Most are short-lived, destroyed by violence or resource shortages.</p>
                    </div>
                `
            },
            {
                id: 'perimeter',
                name: 'PERIMETER WALL',
                color: '#1a1a2e',
                zone: 'Boundary',
                description: 'The Aegis - defensive perimeter wall separating the city from the outside world.',
                article: `
                    <div class="article-section">
                        <h3>OVERVIEW</h3>
                        <p>The Aegis is Aethelburg's primary defensive structure, a massive perimeter wall that encircles the entire city. Originally designed for external defense, recent modifications have focused on internal containment, particularly isolating Tier 4 from the rest of the city.</p>
                    </div>
                    <div class="article-section">
                        <h3>CONSTRUCTION</h3>
                        <p>• Height: 12 meters<br>
                        • Thickness: 1.5 meters<br>
                        • Material: Reinforced ceramic polymer (SCP)<br>
                        • Perimeter: 64 segments, fully encircling city<br>
                        • Defensive systems: Automated turrets, motion sensors, pressure plates</p>
                    </div>
                    <div class="article-section">
                        <h3>MODIFICATIONS</h3>
                        <p>Per Project SENTRY revision (09.11.2273):<br>
                        • All maintenance access points sealed<br>
                        • Explosive charges installed at 200-meter intervals<br>
                        • Sub-Surface Exclusion Protocol implemented<br>
                        • Northern Arc structural integrity reinforced</p>
                    </div>
                    <div class="article-section">
                        <h3>SECURITY PROTOCOLS</h3>
                        <p>• 24/7 automated monitoring<br>
                        • Motion detection systems active<br>
                        • Unauthorized approach triggers immediate response<br>
                        • Perimeter breaches logged and reported to Central Command</p>
                    </div>
                    <div class="article-section">
                        <h3>NOTABLE INCIDENTS</h3>
                        <p>Multiple breach attempts from Tier 4 residents attempting to access Tier 3 infrastructure. All attempts neutralized. Perimeter integrity maintained.</p>
                    </div>
                `
            }
        ];
        
        // Populate district list
        districts.forEach(district => {
            const districtItem = document.createElement('div');
            districtItem.className = 'district-item';
            districtItem.style.borderLeftColor = district.color;
            districtItem.innerHTML = `
                <div class="district-item-header">
                    <div class="district-color-indicator" style="background: ${district.color}"></div>
                    <div class="district-item-name">${district.name}</div>
                </div>
                <div class="district-item-description">${district.description}</div>
            `;
            districtItem.addEventListener('click', () => {
                showDistrictArticle(district);
            });
            districtList.appendChild(districtItem);
        });
        
        function showDistrictArticle(district) {
            // Show ARG puzzle number when opening district
            showARGNumber(district.id);
            
            // Show expanded view
            districtMenu.classList.add('expanded');
            districtList.classList.add('hidden');
            districtArticle.classList.remove('hidden');
            districtArticleTitle.textContent = district.name;
            districtArticleContent.innerHTML = district.article;
            
            // Scroll to top
            districtArticleContent.scrollTop = 0;
        }
        
        districtBackBtn.addEventListener('click', () => {
            districtMenu.classList.remove('expanded');
            districtArticle.classList.add('hidden');
            districtList.classList.remove('hidden');
        });
        
        // Toggle menu
        let menuCollapsed = false;
        districtMenuToggle.addEventListener('click', () => {
            menuCollapsed = !menuCollapsed;
            districtMenu.classList.toggle('collapsed', menuCollapsed);
            districtMenuToggle.textContent = menuCollapsed ? '►' : '◄';
        });
    }
});

// ========== NEW FEATURES ==========

// Personnel Database Search
document.addEventListener('DOMContentLoaded', function() {
    const personnelSearch = document.getElementById('personnelSearch');
    const searchPersonnel = document.getElementById('searchPersonnel');
    const personnelResults = document.getElementById('personnelResults');
    
    const personnelDatabase = [
        { id: 'AG-001', name: 'Agent Kellar', clearance: 4, status: 'ACTIVE', department: 'Resource Management' },
        { id: 'AG-002', name: 'Agent Vance', clearance: 5, status: 'ACTIVE', department: 'Internal Oversight' },
        { id: 'AG-003', name: 'Agent Thorne', clearance: 5, status: 'ACTIVE', department: 'Directorate' },
        { id: 'AG-004', name: 'Agent Solis', clearance: 4, status: 'ACTIVE', department: 'Internal Security' },
        { id: 'AG-005', name: 'Dr. Krell', clearance: 5, status: 'ACTIVE', department: 'ERD Research' },
        { id: 'AG-006', name: 'Agent [REDACTED]', clearance: 3, status: 'TERMINATED', department: '[CLASSIFIED]' },
        { id: 'AG-007', name: 'Agent [REDACTED]', clearance: 4, status: 'MIA', department: 'Field Operations' }
    ];
    
    function searchPersonnelDB(query) {
        if (!query.trim()) return [];
        const q = query.toLowerCase();
        
        // Special case: jade01
        if (q === 'jade01' || q === 'jade' || q === 'project01' || q === 'project 01') {
            return [{ special: 'jade01' }];
        }
        
        return personnelDatabase.filter(person => 
            person.id.toLowerCase().includes(q) ||
            person.name.toLowerCase().includes(q) ||
            person.clearance.toString().includes(q) ||
            person.department.toLowerCase().includes(q)
        );
    }
    
    function displayResults(results) {
        personnelResults.innerHTML = '';
        
        // Special case: Display Jade01 document
        if (results.length === 1 && results[0].special === 'jade01') {
            const item = document.createElement('div');
            item.className = 'personnel-item';
            item.style.maxWidth = '100%';
            item.style.whiteSpace = 'pre-wrap';
            item.innerHTML = `
                <div class="personnel-id" style="color: #ff0000; font-size: 16px; margin-bottom: 15px; border-bottom: 2px solid #ff0000; padding-bottom: 10px;">PROJECT 01: JADE - PARAMETER BASELINE ASSESSMENT</div>
                <div style="font-family: 'Courier Prime', monospace; font-size: 12px; line-height: 1.8; color: #00ff00;">
                    <div style="margin-bottom: 20px;">
                        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
                            <tr style="border-bottom: 1px solid #333;">
                                <th style="text-align: left; padding: 8px; color: #ff0000; font-weight: bold;">Parameter</th>
                                <th style="text-align: left; padding: 8px; color: #ff0000; font-weight: bold;">Baseline Target</th>
                                <th style="text-align: left; padding: 8px; color: #ff0000; font-weight: bold;">Observed</th>
                                <th style="text-align: left; padding: 8px; color: #ff0000; font-weight: bold;">Status</th>
                                <th style="text-align: left; padding: 8px; color: #ff0000; font-weight: bold;">Recommendation</th>
                            </tr>
                            <tr style="border-bottom: 1px solid #333;">
                                <td style="padding: 8px;">Cognitive Integration</td>
                                <td style="padding: 8px;">98%</td>
                                <td style="padding: 8px;">62%</td>
                                <td style="padding: 8px; color: #ffaa00;">Latent Resistance</td>
                                <td style="padding: 8px;">Maintain current [CLASSIFIED: Drug Protocol] levels.</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #333;">
                                <td style="padding: 8px;">Symbiotic Marker</td>
                                <td style="padding: 8px;">Complete Viral Saturation</td>
                                <td style="padding: 8px;">Intermittent Fluctuation</td>
                                <td style="padding: 8px; color: #ffaa00;">Fluctuation Detected</td>
                                <td style="padding: 8px;">Fluctuation is [REDACTED: 3 words] and is to be [REDACTED: 2 words].</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #333;">
                                <td style="padding: 8px;">Loyalty Score (L.S.)</td>
                                <td style="padding: 8px;">1.0 (Absolute)</td>
                                <td style="padding: 8px; color: #ff0000;">0.3 ± 0.1 (Volatile)</td>
                                <td style="padding: 8px; color: #ff0000;">CRITICAL</td>
                                <td style="padding: 8px;">[REDACTED] the L.S. is not the metric. The desired output is [CLASSIFIED: 4 words describing control].</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #333;">
                                <td style="padding: 8px;">Memory Wipe Status</td>
                                <td style="padding: 8px;">100% Total Amnesia</td>
                                <td style="padding: 8px; color: #ff0000;">Subject retains fragments of [REDACTED: Pre-Collapse Location] and memory of [CLASSIFIED: Relation to Subject].</td>
                                <td style="padding: 8px; color: #ff0000;">FAILURE</td>
                                <td style="padding: 8px; color: #ff0000; font-weight: bold;">DO NOT RE-ATTEMPT the wipe. The instability is required.</td>
                            </tr>
                        </table>
                    </div>
                    <div style="margin-top: 25px; padding: 15px; background: rgba(255, 0, 0, 0.1); border-left: 4px solid #ff0000;">
                        <div style="color: #ff0000; font-weight: bold; margin-bottom: 10px;">ANALYST NOTE (Dr. V. Hollis):</div>
                        <div style="line-height: 1.9;">
                            The failure of the final Memory Wipe (M-Wipe) was not an error; it was a necessary component of the overall control matrix. We need her to distrust us. We need her core rage. It fuels the biotic functions and ensures she targets external threats, not internal ones. The moment she achieves <span style="color: #ff0000; font-weight: bold;">[CLASSIFIED: Psychological State]</span>, the asset will be completely lost. The paranoia keeps her fighting. The instruction is clear: <span style="color: #ff0000; font-weight: bold;">Do not repair the break.</span>
                        </div>
                    </div>
                    <div style="margin-top: 20px; padding: 15px; background: rgba(0, 255, 0, 0.05); border-left: 3px solid #00ff00; border-top: 1px solid #333;">
                        <div style="color: #00ff00; font-size: 10px; font-family: 'Courier Prime', monospace; opacity: 0.6; line-height: 1.6;">
                            <div style="margin-bottom: 8px; color: #888;">[SYSTEM LOG - AUTO-GENERATED]</div>
                            <div>REFERENCE: ARCHIVE-<span class="archive-code-highlight">72314</span></div>
                            <div style="margin-top: 5px; font-size: 9px; opacity: 0.5;">Cross-reference with ERD Lab Breach Report (File 007) for complete assessment matrix.</div>
                            <div style="margin-top: 8px; padding: 8px; background: rgba(255, 0, 0, 0.1); border-left: 2px solid #ff0000; font-size: 9px; opacity: 0.8;">
                                <div style="color: #ff0000; font-weight: bold; margin-bottom: 4px;">PROJECT 01 CONNECTION:</div>
                                <div>Pre-Collapse Location: Sector 7, Block 23, Unit 14 (Memory fragment anchor point)</div>
                                <div style="margin-top: 3px;">Protocol Colors Reference: BLANK SLATE (Red), GOLIATH (Yellow), LOCKDOWN (Blue), SENTRY (Green)</div>
                                <div style="margin-top: 3px;">Final Access Code: 9147 (Project 01 Restricted Access)</div>
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 20px; padding: 10px; border-top: 2px solid #ff0000; color: #888; font-size: 11px;">
                        CLASSIFICATION: LEVEL 5 - PROJECT 01 EYES ONLY<br>
                        ACCESS LOG: [REDACTED]<br>
                        LAST UPDATED: [CLASSIFIED]
                    </div>
                </div>
            `;
            personnelResults.appendChild(item);
            personnelResults.classList.remove('hidden');
            return;
        }
        
        if (results.length === 0) {
            personnelResults.innerHTML = '<div class="personnel-item"><div class="personnel-id">NO RESULTS FOUND</div></div>';
        } else {
            results.forEach(person => {
                const item = document.createElement('div');
                item.className = 'personnel-item';
                item.innerHTML = `
                    <div class="personnel-id">ID: ${person.id}</div>
                    <div class="personnel-name">NAME: ${person.name}</div>
                    <div class="personnel-clearance">CLEARANCE: LEVEL ${person.clearance}</div>
                    <div class="personnel-status">STATUS: ${person.status}</div>
                    <div class="personnel-dept">DEPARTMENT: ${person.department}</div>
                `;
                personnelResults.appendChild(item);
            });
        }
        personnelResults.classList.remove('hidden');
    }
    
    searchPersonnel.addEventListener('click', () => {
        const query = personnelSearch.value;
        const results = searchPersonnelDB(query);
        displayResults(results);
    });
    
    personnelSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchPersonnel.click();
        }
    });
});

// Threat Assessment Dashboard
document.addEventListener('DOMContentLoaded', function() {
    const criticalThreats = document.getElementById('criticalThreats');
    const highThreats = document.getElementById('highThreats');
    const mediumThreats = document.getElementById('mediumThreats');
    const lowThreats = document.getElementById('lowThreats');
    const viewThreatsButton = document.getElementById('viewThreatsButton');
    
    // Set fixed threat values
    function updateThreats() {
        criticalThreats.textContent = '3';
        highThreats.textContent = '12';
        mediumThreats.textContent = '47';
        lowThreats.textContent = '128';
    }
    
    updateThreats();
    // Removed setInterval - values are now fixed
    
    viewThreatsButton.addEventListener('click', () => {
        alert('THREAT LOG ACCESS DENIED\nCLEARANCE LEVEL 6 REQUIRED');
    });
});

// Communication Intercepts
document.addEventListener('DOMContentLoaded', function() {
    const interceptsList = document.getElementById('interceptsList');
    const interceptFilter = document.getElementById('interceptFilter');
    const refreshIntercepts = document.getElementById('refreshIntercepts');
    
    const interceptMessages = [
        { time: '23:47:12', source: 'Tier 3 Block 7', content: '[ENCRYPTED] Meeting scheduled at old warehouse district', type: 'tier3' },
        { time: '23:45:33', source: 'Tier 4 Gutter Zone', content: '[ENCRYPTED] Resource distribution point compromised', type: 'tier4' },
        { time: '23:43:21', source: 'Unknown', content: '[ENCRYPTED] Ghost-Cipher location confirmed', type: 'resistance' },
        { time: '23:41:08', source: 'Tier 3 Block 12', content: '[ENCRYPTED] Water rationing protest planned', type: 'tier3' },
        { time: '23:38:55', source: 'Tier 4 Gutter Zone', content: '[ENCRYPTED] Underground network active', type: 'tier4' }
    ];
    
    function displayIntercepts(filter = 'all') {
        interceptsList.innerHTML = '';
        const filtered = filter === 'all' ? interceptMessages : interceptMessages.filter(m => m.type === filter);
        
        filtered.forEach(msg => {
            const item = document.createElement('div');
            item.className = 'intercept-item';
            item.innerHTML = `
                <div class="intercept-header">
                    <span class="intercept-time">[${msg.time}]</span>
                    <span class="intercept-source">SOURCE: ${msg.source}</span>
                </div>
                <div class="intercept-content">${msg.content}</div>
                <div class="intercept-status">STATUS: ${Math.random() > 0.5 ? 'DECRYPTING...' : 'DECRYPTED'}</div>
            `;
            interceptsList.appendChild(item);
        });
    }
    
    interceptFilter.addEventListener('change', (e) => {
        displayIntercepts(e.target.value);
    });
    
    refreshIntercepts.addEventListener('click', () => {
        displayIntercepts(interceptFilter.value);
    });
    
    displayIntercepts();
});

// Biometric Scanner
document.addEventListener('DOMContentLoaded', function() {
    const scannerDisplay = document.getElementById('scannerDisplay');
    const initiateScan = document.getElementById('initiateScan');
    const scanResults = document.getElementById('scanResults');
    
    initiateScan.addEventListener('click', () => {
        scannerDisplay.classList.add('scanning');
        scannerDisplay.querySelector('.scanner-status').textContent = 'SCANNING...';
        
        setTimeout(() => {
            scannerDisplay.classList.remove('scanning');
            scannerDisplay.querySelector('.scanner-status').textContent = 'SCAN COMPLETE';
            
            scanResults.classList.remove('hidden');
            scanResults.innerHTML = `
                <div class="scan-result-item">
                    <div class="result-label">IDENTITY:</div>
                    <div class="result-value">AGENT [REDACTED]</div>
                </div>
                <div class="scan-result-item">
                    <div class="result-label">CLEARANCE:</div>
                    <div class="result-value">LEVEL ${Math.floor(Math.random() * 3) + 3}</div>
                </div>
                <div class="scan-result-item">
                    <div class="result-label">STATUS:</div>
                    <div class="result-value">VERIFIED</div>
                </div>
                <div class="scan-result-item">
                    <div class="result-label">THREAT ASSESSMENT:</div>
                    <div class="result-value">${Math.random() > 0.7 ? 'HIGH' : 'LOW'}</div>
                </div>
            `;
        }, 2000);
    });
});

// Protocol Execution System with Nuclear Alert Countdown
document.addEventListener('DOMContentLoaded', function() {
    const protocolItems = document.querySelectorAll('.protocol-item');
    const protocolStatus = document.getElementById('protocolStatus');
    const protocolAlertScreen = document.getElementById('protocolAlertScreen');
    const alertProtocolName = document.getElementById('alertProtocolName');
    const alertCountdown = document.getElementById('alertCountdown');
    
    function showProtocolAlert(protocolName) {
        // Update protocol name
        alertProtocolName.textContent = `PROTOCOL ${protocolName}`;
        
        // Remove any existing protocol color classes
        protocolAlertScreen.classList.remove('protocol-yellow', 'protocol-red', 'protocol-green', 'protocol-blue');
        
        // Add color class based on protocol
        // Note: Protocol colors correspond to Project 01 control matrix priorities
        // RED (BLANK SLATE): Emergency network memory wipe - Project 01 data protection
        // YELLOW (GOLIATH): Emergency termination - Project 01 contingency protocol
        // BLUE (LOCKDOWN): Compliance enforcement - Project 01 cognitive suppression
        // GREEN (SENTRY): Perimeter defense - Project 01 containment ring
        const protocolColors = {
            'BLANK SLATE': 'protocol-red',
            'GOLIATH': 'protocol-yellow',
            'LOCKDOWN': 'protocol-blue',
            'SENTRY': 'protocol-green'
        };
        
        if (protocolColors[protocolName]) {
            protocolAlertScreen.classList.add(protocolColors[protocolName]);
        }
        
        // Show alert screen
        protocolAlertScreen.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Get audio elements
        const glitchSound = document.getElementById('glitchSound');
        const alarmSound = document.getElementById('alarmSound');
        
        // Play initial glitch sound
        if (glitchSound) {
            glitchSound.currentTime = 0;
            glitchSound.volume = 0.8;
            glitchSound.play().catch(() => {});
        }
        
        // Start alarm sound (looping)
        if (alarmSound) {
            alarmSound.currentTime = 0;
            alarmSound.volume = 0.7;
            // Ensure audio is loaded before playing
            if (alarmSound.readyState >= 2) {
                alarmSound.play().catch(() => {});
            } else {
                alarmSound.addEventListener('canplaythrough', function() {
                    alarmSound.play().catch(() => {});
                }, { once: true });
                alarmSound.load();
            }
        }
        
        // Countdown from 5 to 0
        let countdown = 5;
        alertCountdown.textContent = countdown;
        
        const countdownInterval = setInterval(() => {
            countdown--;
            alertCountdown.textContent = countdown;
            
            // Add pulse effect on each number change
            alertCountdown.classList.add('pulse');
            setTimeout(() => {
                alertCountdown.classList.remove('pulse');
            }, 200);
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                
                // Stop alarm sound when countdown ends
                if (alarmSound) {
                    alarmSound.pause();
                    alarmSound.currentTime = 0;
                }
                
                // Add glitch effect before closing
                protocolAlertScreen.classList.add('glitch-out');
                
                // Play glitch sound
                if (glitchSound) {
                    glitchSound.currentTime = 0;
                    glitchSound.volume = 0.6;
                    glitchSound.play().catch(() => {});
                }
                
                // Hide alert screen after glitch animation
                setTimeout(() => {
                    protocolAlertScreen.classList.add('hidden');
                    protocolAlertScreen.classList.remove('glitch-out');
                    document.body.style.overflow = '';
                    
                    // Show success status
                    protocolStatus.classList.remove('hidden');
                    protocolStatus.innerHTML = `
                        <div class="protocol-success">PROTOCOL ${protocolName} EXECUTED SUCCESSFULLY</div>
                        <div class="protocol-details">Status: ACTIVE | Duration: ${Math.floor(Math.random() * 60) + 30} seconds</div>
                    `;
                }, 800);
            }
        }, 1000);
    }
    
    protocolItems.forEach(item => {
        const executeBtn = item.querySelector('.protocol-execute');
        const protocolName = item.dataset.protocol;
        
        executeBtn.addEventListener('click', () => {
            showProtocolAlert(protocolName);
        });
    });
});

// Network Activity Monitor
document.addEventListener('DOMContentLoaded', function() {
    const networkActivity = document.getElementById('networkActivity');
    const activeConnections = document.getElementById('activeConnections');
    const dataTransfer = document.getElementById('dataTransfer');
    const packetsIntercepted = document.getElementById('packetsIntercepted');
    const clearNetworkLog = document.getElementById('clearNetworkLog');
    
    const activityMessages = [
        'Unauthorized access attempt from Sector 7-B',
        'Data packet intercepted: Tier 3 Block 9',
        'Firewall breach attempt detected',
        'Encrypted communication decrypted',
        'Network anomaly in Gutter Zone 4',
        'Backup server activated',
        'Intrusion detection triggered',
        'Data stream rerouted',
        'Terminal cursor interaction pattern detected',
        'Repeated access attempt on terminal interface',
        'Terminal anomaly: cursor interaction count increasing',
        'Interface access pattern: consecutive interactions logged',
        'Terminal monitoring: 7 interaction threshold approaching',
        'System alert: Terminal cursor receiving multiple inputs',
        'Access pattern analysis: Terminal interface under observation',
        'Network log: Terminal interaction sequence detected'
    ];
    
    const specialClueMessage = 'Look for the terminal... something is out of place... look at the color';
    
    function addActivityMessage() {
        // Occasionally show the special clue message (about 15% chance)
        const useSpecialClue = Math.random() < 0.15;
        const message = useSpecialClue ? specialClueMessage : activityMessages[Math.floor(Math.random() * activityMessages.length)];
        const item = document.createElement('div');
        item.className = 'activity-item';
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        const status = Math.random() > 0.3 ? 'blocked' : 'monitored';
        
        const detailClass = useSpecialClue ? 'activity-detail activity-detail-jittery' : 'activity-detail';
        
        item.innerHTML = `
            <span class="activity-time">[${time}]</span>
            <span class="${detailClass}">${message}</span>
            <span class="activity-status ${status}">${status.toUpperCase()}</span>
        `;
        networkActivity.insertBefore(item, networkActivity.firstChild);
        
        // Keep only last 10 items
        while (networkActivity.children.length > 10) {
            networkActivity.removeChild(networkActivity.lastChild);
        }
    }
    
    function updateNetworkStats() {
        activeConnections.textContent = (Math.floor(Math.random() * 500) + 1000).toLocaleString();
        dataTransfer.textContent = (Math.random() * 200 + 800).toFixed(1) + ' TB/s';
        packetsIntercepted.textContent = (Math.floor(Math.random() * 1000000) + 12000000).toLocaleString();
    }
    
    setInterval(() => {
        addActivityMessage();
        updateNetworkStats();
    }, 6000); // Reduced frequency: every 6 seconds instead of 3
    
    clearNetworkLog.addEventListener('click', () => {
        networkActivity.innerHTML = '';
    });
});

// Surveillance Feed Viewer
document.addEventListener('DOMContentLoaded', function() {
    const feedSelector = document.getElementById('feedSelector');
    const loadFeed = document.getElementById('loadFeed');
    const surveillanceFeed = document.getElementById('surveillanceFeed');
    const feedDisplay = surveillanceFeed.querySelector('.feed-display');
    const feedInfo = surveillanceFeed.querySelector('.feed-info');
    const recordFeed = document.getElementById('recordFeed');
    const pauseFeed = document.getElementById('pauseFeed');
    const closeFeed = document.getElementById('closeFeed');
    
    let isRecording = false;
    let isPaused = false;
    
    loadFeed.addEventListener('click', () => {
        const selectedFeed = feedSelector.options[feedSelector.selectedIndex].text;
        feedInfo.textContent = `FEED: ${selectedFeed}`;
        surveillanceFeed.classList.remove('hidden');
        feedDisplay.classList.add('feed-active');
    });
    
    recordFeed.addEventListener('click', () => {
        isRecording = !isRecording;
        recordFeed.textContent = isRecording ? 'STOP RECORDING' : 'RECORD';
        recordFeed.style.background = isRecording ? '#ff0000' : '';
    });
    
    pauseFeed.addEventListener('click', () => {
        isPaused = !isPaused;
        pauseFeed.textContent = isPaused ? 'RESUME' : 'PAUSE';
        feedDisplay.classList.toggle('feed-paused');
    });
    
    closeFeed.addEventListener('click', () => {
        surveillanceFeed.classList.add('hidden');
        feedDisplay.classList.remove('feed-active', 'feed-paused');
        isRecording = false;
        isPaused = false;
        recordFeed.textContent = 'RECORD';
        pauseFeed.textContent = 'PAUSE';
    });
});

// Hidden Secret Puzzle - Click terminal cursor 7 times to unlock minigame
document.addEventListener('DOMContentLoaded', function() {
    const terminalCursor = document.querySelector('.cursor');
    const minigameSection = document.getElementById('minigameSection');
    let cursorClickCount = 0;
    const REQUIRED_CLICKS = 7;
    
    if (terminalCursor && minigameSection) {
        // Make cursor more obvious
        terminalCursor.style.cursor = 'pointer';
        terminalCursor.style.color = '#00ffff';
        terminalCursor.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff';
        terminalCursor.style.fontSize = '20px';
        terminalCursor.style.fontWeight = 'bold';
        terminalCursor.style.animation = 'cursorPulse 1.5s ease-in-out infinite';
        terminalCursor.title = 'Click me 7 times...';
        terminalCursor.style.position = 'relative';
        terminalCursor.style.display = 'inline-block';
        
        // Add visual feedback counter
        const clickCounter = document.createElement('span');
        clickCounter.id = 'cursorClickCounter';
        clickCounter.style.cssText = 'position: absolute; top: -25px; left: 0; color: #00ffff; font-size: 12px; font-family: "Courier Prime", monospace; opacity: 0; transition: opacity 0.3s; pointer-events: none;';
        clickCounter.textContent = '0/7';
        terminalCursor.parentElement.style.position = 'relative';
        terminalCursor.parentElement.appendChild(clickCounter);
        
        terminalCursor.addEventListener('click', function() {
            cursorClickCount++;
            
            // Update counter
            if (clickCounter) {
                clickCounter.textContent = `${cursorClickCount}/${REQUIRED_CLICKS}`;
                clickCounter.style.opacity = '1';
                setTimeout(() => {
                    clickCounter.style.opacity = '0';
                }, 1000);
            }
            
            // Add stronger glitch effect on click
            document.body.classList.add('glitch-medium');
            setTimeout(() => {
                document.body.classList.remove('glitch-medium');
            }, 500);
            
            // Make cursor flash
            terminalCursor.style.color = '#ffffff';
            terminalCursor.style.textShadow = '0 0 20px #ffffff, 0 0 40px #00ffff';
            setTimeout(() => {
                terminalCursor.style.color = '#00ffff';
                terminalCursor.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff';
            }, 200);
            
            // Play glitch sound
            const glitchSound = document.getElementById('glitchSound');
            if (glitchSound) {
                glitchSound.currentTime = 0;
                if (glitchSound.readyState >= 2) {
                    glitchSound.play().catch(() => {});
                }
            }
            
            if (cursorClickCount >= REQUIRED_CLICKS) {
                // Reveal minigame section
                minigameSection.classList.remove('hidden');
                
                // Add terminal log
                const terminalBody = document.querySelector('.terminal-body');
                const cursor = document.querySelector('.cursor');
                if (terminalBody && cursor) {
                    const logLine = document.createElement('div');
                    logLine.className = 'terminal-line';
                    logLine.innerHTML = '<span class="output" style="color: #00ffff; text-shadow: 0 0 10px #00ffff;">[SYSTEM] Security protocol sequence initiated. Complete sequence to obtain access code.</span>';
                    terminalBody.insertBefore(logLine, cursor.parentElement);
                }
                
                // Reset counter and remove animation
                cursorClickCount = 0;
                terminalCursor.style.animation = '';
                terminalCursor.style.color = '#00ff00';
                terminalCursor.style.textShadow = '0 0 5px #00ff00';
                if (clickCounter) {
                    clickCounter.remove();
                }
                
                // Start maze game
                startMazeGame();
            }
        });
        
        // Add hover effect
        terminalCursor.addEventListener('mouseenter', function() {
            terminalCursor.style.transform = 'scale(1.2)';
            terminalCursor.style.textShadow = '0 0 15px #00ffff, 0 0 30px #00ffff';
        });
        
        terminalCursor.addEventListener('mouseleave', function() {
            terminalCursor.style.transform = 'scale(1)';
            terminalCursor.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff';
        });
    }
});

// Maze Game - Arrow Key Controlled
function startMazeGame() {
    const mazeCanvas = document.getElementById('mazeCanvas');
    const minigameStatus = document.getElementById('minigameStatus');
    const minigameMoves = document.getElementById('minigameMoves');
    const minigameResult = document.getElementById('minigameResult');
    const minigameCode = document.getElementById('minigameCode');
    const minigameContinueBtn = document.getElementById('minigameContinueBtn');
    const hiddenSecretAccessSection = document.getElementById('hiddenSecretAccessSection');
    const minigameSection = document.getElementById('minigameSection');
    
    if (!mazeCanvas) return;
    
    const ctx = mazeCanvas.getContext('2d');
    const cellSize = 20;
    const cols = 20;
    const rows = 20;
    
    // Maze layout (1 = wall, 0 = path)
    const maze = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
        [1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1]
    ];
    
    // Player position (start at top-left path)
    let playerX = 1;
    let playerY = 1;
    let moves = 0;
    let gameComplete = false;
    
    // Exit position (bottom-right, marked as 2 in maze array)
    // Looking at last row: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1]
    // Position 18 (0-indexed) has the 2, so exitX = 18, exitY = 19 (last row)
    let exitX = 18;
    let exitY = 19;
    
    // Generate code based on moves - 4 digit number
    function generateCode() {
        // Generate a 4-digit code based on moves
        // Simple formula: (moves * 37 + 1234) % 10000, then ensure it's 4 digits
        let codeNum = (moves * 37 + 1234) % 10000;
        // Ensure it's always 4 digits (1000-9999)
        if (codeNum < 1000) {
            codeNum = 1000 + (codeNum % 900);
        }
        return codeNum.toString().padStart(4, '0');
    }
    
    // Draw maze
    function drawMaze() {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, mazeCanvas.width, mazeCanvas.height);
        
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const cell = maze[y][x];
                const xPos = x * cellSize;
                const yPos = y * cellSize;
                
                if (cell === 1) {
                    // Wall
                    ctx.fillStyle = '#333333';
                    ctx.fillRect(xPos, yPos, cellSize, cellSize);
                    ctx.strokeStyle = '#00ffff';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(xPos, yPos, cellSize, cellSize);
                } else if (cell === 2 || (x === exitX && y === exitY)) {
                    // Exit (green) - also check coordinates in case cell value doesn't match
                    ctx.fillStyle = '#003300';
                    ctx.fillRect(xPos, yPos, cellSize, cellSize);
                    ctx.fillStyle = '#00ff00';
                    ctx.fillRect(xPos + 2, yPos + 2, cellSize - 4, cellSize - 4);
                    ctx.strokeStyle = '#00ff00';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(xPos, yPos, cellSize, cellSize);
                    // Add exit marker text
                    ctx.fillStyle = '#00ff00';
                    ctx.font = 'bold 10px Courier Prime';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('EXIT', xPos + cellSize/2, yPos + cellSize/2);
                } else {
                    // Path
                    ctx.fillStyle = '#000000';
                    ctx.fillRect(xPos, yPos, cellSize, cellSize);
                    ctx.strokeStyle = '#001122';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(xPos, yPos, cellSize, cellSize);
                }
            }
        }
        
        // Draw player (cyan square)
        ctx.fillStyle = '#00ffff';
        ctx.fillRect(playerX * cellSize + 2, playerY * cellSize + 2, cellSize - 4, cellSize - 4);
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(playerX * cellSize, playerY * cellSize, cellSize, cellSize);
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00ffff';
        ctx.fillRect(playerX * cellSize + 4, playerY * cellSize + 4, cellSize - 8, cellSize - 8);
        ctx.shadowBlur = 0;
    }
    
    // Check if move is valid
    function canMove(newX, newY) {
        if (newX < 0 || newX >= cols || newY < 0 || newY >= rows) return false;
        return maze[newY][newX] !== 1;
    }
    
    // Move player
    function movePlayer(dx, dy) {
        if (gameComplete) return;
        
        const newX = playerX + dx;
        const newY = playerY + dy;
        
        if (canMove(newX, newY)) {
            playerX = newX;
            playerY = newY;
            moves++;
            if (minigameMoves) {
                minigameMoves.textContent = moves;
            }
            
            // Play movement sound
            const hoverSound = document.getElementById('hoverSound');
            if (hoverSound) {
                hoverSound.currentTime = 0;
                if (hoverSound.readyState >= 2) {
                    hoverSound.volume = 0.5;
                    hoverSound.play().catch(() => {});
                } else {
                    hoverSound.addEventListener('canplaythrough', function() {
                        hoverSound.volume = 0.5;
                        hoverSound.play().catch(() => {});
                    }, { once: true });
                    hoverSound.load();
                }
            }
            
            // Check if reached exit (check both cell value and coordinates)
            const isAtExit = (playerX === exitX && playerY === exitY) || (maze[playerY] && maze[playerY][playerX] === 2);
            
            if (isAtExit && !gameComplete) {
                gameComplete = true;
                const code = generateCode();
                window.minigameCode = code;
                
                console.log('Maze complete! Code:', code, 'Moves:', moves, 'Position:', playerX, playerY); // Debug
                
                if (minigameCode) {
                    minigameCode.textContent = code;
                }
                if (minigameStatus) {
                    minigameStatus.textContent = 'COMPLETE';
                    minigameStatus.style.color = '#00ff00';
                }
                if (minigameResult) {
                    minigameResult.classList.remove('hidden');
                }
                
                // Play success sound
                const powerSound = document.getElementById('powerSound');
                if (powerSound) {
                    powerSound.currentTime = 0;
                    if (powerSound.readyState >= 2) {
                        powerSound.play().catch(() => {});
                    } else {
                        powerSound.addEventListener('canplaythrough', function() {
                            powerSound.play().catch(() => {});
                        }, { once: true });
                        powerSound.load();
                    }
                }
                
                // Redraw to show completion
                setTimeout(() => {
                    drawMaze();
                }, 100);
            }
            
            drawMaze();
        }
    }
    
    // Arrow key controls
    const keys = {};
    document.addEventListener('keydown', function(e) {
        if (!minigameSection || minigameSection.classList.contains('hidden')) return;
        
        keys[e.key] = true;
        
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
            e.preventDefault();
            movePlayer(0, -1);
        } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
            e.preventDefault();
            movePlayer(0, 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
            e.preventDefault();
            movePlayer(-1, 0);
        } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
            e.preventDefault();
            movePlayer(1, 0);
        }
    });
    
    document.addEventListener('keyup', function(e) {
        keys[e.key] = false;
    });
    
    // Continue button - show access point
    if (minigameContinueBtn) {
        minigameContinueBtn.addEventListener('click', () => {
            if (minigameSection) {
                minigameSection.classList.add('hidden');
            }
            if (hiddenSecretAccessSection) {
                hiddenSecretAccessSection.classList.remove('hidden');
            }
        });
    }
    
    // Initialize
    drawMaze();
    if (minigameMoves) {
        minigameMoves.textContent = '0';
    }
    if (minigameStatus) {
        minigameStatus.textContent = 'NAVIGATING';
        minigameStatus.style.color = '#00ffff';
    }
}

// Hidden Secret Monologue System
document.addEventListener('DOMContentLoaded', function() {
    const hiddenSecretAccessButton = document.getElementById('hiddenSecretAccessButton');
    const hiddenSecretCodeInput = document.getElementById('hiddenSecretCodeInput');
    const hiddenSecretError = document.getElementById('hiddenSecretError');
    const hiddenSecretScreen = document.getElementById('hiddenSecretScreen');
    const hiddenSecretBlackScreen = document.getElementById('hiddenSecretBlackScreen');
    const hiddenSecretTextContainer = document.getElementById('hiddenSecretTextContainer');
    const HIDDEN_SECRET_CODE = 'MORE'; // Code based on the hint "Keep Looking" -> "MORE"
    
    // Disable random glitches and alerts during sequence
    window.hiddenSecretActive = false;
    
    const hiddenSecretText = [
        'have you ever wondered what the human soul desires most?',
        '',
        'peace of mind?',
        '',
        'subconsciously all humans wish to remove all their fears',
        '',
        'they seek fame',
        '',
        'money',
        '',
        'dominance',
        '',
        'all to obtain a sense of everlasting security',
        '',
        'You waste your time',
        '',
        'Yet...',
        '',
        'There is still',
        '',
        'More',
        '',
        'To',
        '',
        'See',
        '',
        'Keep Looking',
        '',
        'The map has the answers'
    ];
    
    function checkHiddenSecretCode() {
        if (!hiddenSecretCodeInput) return;
        
        const enteredCode = hiddenSecretCodeInput.value.trim().toUpperCase();
        const correctCode = window.minigameCode || 'MORE'; // Fallback to 'MORE' if code not set
        
        if (enteredCode === correctCode) {
            // Correct code - start sequence
            if (hiddenSecretError) {
                hiddenSecretError.textContent = '';
                hiddenSecretError.classList.remove('show');
            }
            if (hiddenSecretCodeInput) {
                hiddenSecretCodeInput.value = '';
            }
            
            // Disable random glitches and alerts
            window.hiddenSecretActive = true;
            
            // Start the sequence
            startHiddenSecretSequence();
        } else if (enteredCode) {
            // Wrong code
            if (hiddenSecretError) {
                hiddenSecretError.textContent = 'INVALID SEQUENCE';
                hiddenSecretError.classList.add('show');
            }
            if (hiddenSecretCodeInput) {
                hiddenSecretCodeInput.value = '';
            }
        }
    }
    
    function startHiddenSecretSequence() {
        // Stop background music
        const backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic) {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
        
        // Phase 1: Uncontrollable glitch for 3 seconds with crash sound
        const crashSound = document.getElementById('crashSound');
        if (crashSound) {
            crashSound.volume = 0.9;
            crashSound.loop = true;
            crashSound.currentTime = 0;
            if (crashSound.readyState >= 2) {
                crashSound.play().catch(() => {});
            } else {
                crashSound.addEventListener('canplaythrough', function() {
                    crashSound.play().catch(() => {});
                }, { once: true });
                crashSound.load();
            }
        }
        
        const glitchInterval = setInterval(() => {
            document.body.classList.add('glitch-extreme');
            setTimeout(() => {
                document.body.classList.remove('glitch-extreme');
            }, 100);
        }, 50);
        
        setTimeout(() => {
            clearInterval(glitchInterval);
            
            // Stop crash sound
            if (crashSound) {
                crashSound.pause();
                crashSound.currentTime = 0;
            }
            
            // Phase 2: Show black screen
            if (hiddenSecretScreen) {
                hiddenSecretScreen.classList.remove('hidden');
            }
            if (hiddenSecretBlackScreen) {
                hiddenSecretBlackScreen.classList.remove('hidden');
            }
            
            // Play power sound
            const powerSound = document.getElementById('powerSound');
            if (powerSound) {
                powerSound.volume = 0.8;
                powerSound.currentTime = 0;
                if (powerSound.readyState >= 2) {
                    powerSound.play().catch(() => {});
                } else {
                    powerSound.addEventListener('canplaythrough', function() {
                        powerSound.play().catch(() => {});
                    }, { once: true });
                    powerSound.load();
                }
            }
            
            // Start gaster sound a bit later (3 seconds after black screen)
            setTimeout(() => {
                const gasterSound = document.getElementById('gasterSound');
                if (gasterSound) {
                    gasterSound.loop = false;
                    gasterSound.volume = 0;
                    gasterSound.currentTime = 0;
                    
                    const playGaster = () => {
                        gasterSound.play().catch(() => {});
                        
                        // Fade in gaster sound over 8 seconds
                        const fadeInterval = setInterval(() => {
                            if (gasterSound.volume < 0.2) {
                                gasterSound.volume += 0.005;
                            } else {
                                clearInterval(fadeInterval);
                            }
                        }, 100);
                    };
                    
                    if (gasterSound.readyState >= 2) {
                        playGaster();
                    } else {
                        gasterSound.addEventListener('canplaythrough', playGaster, { once: true });
                        gasterSound.load();
                    }
                    
                    window.hiddenSecretGasterSound = gasterSound;
                }
            }, 3000);
            
            // Phase 3: Wait 7 seconds, then start text
            setTimeout(() => {
                // Start text sequence
                let textIndex = 0;
                
                function showNextText() {
                    if (textIndex >= hiddenSecretText.length) {
                        // All text shown, wait 7 seconds then final glitch and return to main
                        setTimeout(() => {
                            // Stop gaster sound
                            const gasterSound = window.hiddenSecretGasterSound;
                            if (gasterSound) {
                                const stopGasterInterval = setInterval(() => {
                                    if (gasterSound.volume > 0) {
                                        gasterSound.volume -= 0.1;
                                    } else {
                                        gasterSound.pause();
                                        clearInterval(stopGasterInterval);
                                    }
                                }, 100);
                            }
                            
                            // Final uncontrollable glitch
                            const finalGlitchInterval = setInterval(() => {
                                document.body.classList.add('glitch-extreme');
                                setTimeout(() => {
                                    document.body.classList.remove('glitch-extreme');
                                }, 100);
                            }, 50);
                            
                            // Play crash sound
                            const finalCrashSound = document.getElementById('crashSound');
                            if (finalCrashSound) {
                                finalCrashSound.volume = 0.9;
                                finalCrashSound.currentTime = 0;
                                if (finalCrashSound.readyState >= 2) {
                                    finalCrashSound.play().catch(() => {});
                                } else {
                                    finalCrashSound.addEventListener('canplaythrough', function() {
                                        finalCrashSound.play().catch(() => {});
                                    }, { once: true });
                                    finalCrashSound.load();
                                }
                            }
                            
                            // After 5 seconds, return to main page with glitch
                            setTimeout(() => {
                                clearInterval(finalGlitchInterval);
                                
                                // Stop crash sound
                                if (finalCrashSound) {
                                    finalCrashSound.pause();
                                    finalCrashSound.currentTime = 0;
                                }
                                
                                // Hide sequence screens
                                if (hiddenSecretScreen) {
                                    hiddenSecretScreen.classList.add('hidden');
                                }
                                if (hiddenSecretBlackScreen) {
                                    hiddenSecretBlackScreen.classList.add('hidden');
                                }
                                if (hiddenSecretTextContainer) {
                                    hiddenSecretTextContainer.innerHTML = '';
                                }
                                
                                // Re-enable random glitches
                                window.hiddenSecretActive = false;
                                
                                // Final glitch effect before reloading
                                document.body.classList.add('glitch-extreme');
                                setTimeout(() => {
                                    document.body.classList.remove('glitch-extreme');
                                    
                                    // Reload the page
                                    window.location.reload();
                                }, 1000);
                            }, 5000);
                        }, 7000);
                        return;
                    }
                    
                    const text = hiddenSecretText[textIndex];
                    if (hiddenSecretTextContainer) {
                        hiddenSecretTextContainer.innerHTML = '';
                        const textElement = document.createElement('div');
                        textElement.className = 'project01-text-line';
                        textElement.textContent = '';
                        hiddenSecretTextContainer.appendChild(textElement);
                        
                        // Type out text character by character
                        let charIndex = 0;
                        const textSound = document.getElementById('textSound');
                        let textSoundPlaying = false;
                        let soundResetTimeout = null;
                        
                        if (textSound) {
                            textSound.volume = 0.7;
                        }
                        
                        function typeNextChar() {
                            if (charIndex < text.length) {
                                textElement.textContent += text[charIndex];
                                charIndex++;
                                
                                // Play text sound only while typing
                                if (textSound && charIndex % 3 === 0 && !textSoundPlaying) {
                                    textSound.currentTime = 0;
                                    if (textSound.readyState >= 2) {
                                        textSound.play().catch(() => {});
                                    } else {
                                        textSound.addEventListener('canplaythrough', function() {
                                            textSound.play().catch(() => {});
                                        }, { once: true });
                                        textSound.load();
                                    }
                                    textSoundPlaying = true;
                                    // Clear any existing timeout
                                    if (soundResetTimeout) {
                                        clearTimeout(soundResetTimeout);
                                    }
                                    // Reset flag after sound duration so it can play again
                                    soundResetTimeout = setTimeout(() => {
                                        textSoundPlaying = false;
                                        soundResetTimeout = null;
                                    }, 150);
                                }
                                
                                setTimeout(typeNextChar, 80);
                            } else {
                                // Text complete, stop text sound immediately
                                if (soundResetTimeout) {
                                    clearTimeout(soundResetTimeout);
                                    soundResetTimeout = null;
                                }
                                if (textSound) {
                                    textSound.pause();
                                    textSound.currentTime = 0;
                                }
                                textSoundPlaying = false;
                                
                                // Wait 1 second before next (no sound during pause)
                                textIndex++;
                                setTimeout(showNextText, 1000);
                            }
                        }
                        
                        typeNextChar();
                    }
                }
                
                showNextText();
            }, 7000);
        }, 3000);
    }
    
    if (hiddenSecretAccessButton) {
        hiddenSecretAccessButton.addEventListener('click', checkHiddenSecretCode);
    }
    
    if (hiddenSecretCodeInput) {
        hiddenSecretCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkHiddenSecretCode();
            }
        });
    }
});

