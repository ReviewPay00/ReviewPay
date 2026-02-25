
      const authView = document.getElementById('authView');
      const appView = document.getElementById('appView');
      const authMessage = document.getElementById('authMessage');
      const logoutButton = document.getElementById('logoutButton');
      const connectionStatus = document.getElementById('connectionStatus');
      const modeText = document.getElementById('modeText');
      const adminOverlay = document.getElementById('adminOverlay');
      const adminClose = document.getElementById('adminClose');
      const reviewOverlay = document.getElementById('reviewOverlay');
      const reviewCancel = document.getElementById('reviewCancel');
      const reviewSubmit = document.getElementById('reviewSubmit');
      const reviewFeedback = document.getElementById('reviewFeedback');
      const reviewProductInfo = document.getElementById('reviewProductInfo');
      const reviewMessage = document.getElementById('reviewMessage');
      const reviewOpenProduct = document.getElementById('reviewOpenProduct');
      const productOverlay = document.getElementById('productOverlay');
      const productAdTitle = document.getElementById('productAdTitle');
      const productAdMarketplace = document.getElementById('productAdMarketplace');
      const productAdCategory = document.getElementById('productAdCategory');
      const productAdSku = document.getElementById('productAdSku');
      const productAdDescription = document.getElementById('productAdDescription');
      const productAdPrice = document.getElementById('productAdPrice');
      const productAdExternal = document.getElementById('productAdExternal');
      const productAdClose = document.getElementById('productAdClose');
      const reviewRecommend = document.getElementById('reviewRecommend');
      const reviewQuality = document.getElementById('reviewQuality');
      const reviewTitle = document.getElementById('reviewTitle');
      const reviewRatingInputs = document.querySelectorAll('input[name="reviewRating"]');
      const prefNotifications = document.getElementById('prefNotifications');
      const prefSummary = document.getElementById('prefSummary');
      const prefCompact = document.getElementById('prefCompact');
      const reviewList = document.getElementById('reviewList');
      const reviewListSecondary = document.getElementById('reviewListSecondary');
      const nextReviewInfo = document.getElementById('nextReviewInfo');
      const statActiveReviews = document.getElementById('statActiveReviews');
      const statActiveReviewsMirror = document.getElementById('statActiveReviewsMirror');
      const statExpiringReviews = document.getElementById('statExpiringReviews');
      const statPendingBalances = document.getElementById('statPendingBalances');
      const statPendingWithdrawals = document.getElementById('statPendingWithdrawals');
      const statCompletedReviews = document.getElementById('statCompletedReviews');
      const marketplaceList = document.getElementById('marketplaceList');
      const marketplaceListSecondary = document.getElementById('marketplaceListSecondary');
      const walletBalance = document.getElementById('walletBalance');
      const walletBalanceInline = document.getElementById('walletBalanceInline');
      const financeBalance = document.getElementById('financeBalance');
      const financeAvailableBalance = document.getElementById('financeAvailableBalance');
      const financePendingBalance = document.getElementById('financePendingBalance');
      const financePendingWithdrawals = document.getElementById('financePendingWithdrawals');
      const financeApprovedWithdrawals = document.getElementById('financeApprovedWithdrawals');
      const financeRejectedWithdrawals = document.getElementById('financeRejectedWithdrawals');
      const financeBalanceRequestList = document.getElementById('financeBalanceRequestList');
      const financeWithdrawalList = document.getElementById('financeWithdrawalList');
      const userWithdrawalForm = document.getElementById('userWithdrawalForm');
      const userWithdrawalAmount = document.getElementById('userWithdrawalAmount');
      const userWithdrawalKey = document.getElementById('userWithdrawalKey');
      const userWithdrawalMessage = document.getElementById('userWithdrawalMessage');
      const salesToday = document.getElementById('salesToday');
      const salesMonth = document.getElementById('salesMonth');
      const salesCustom = document.getElementById('salesCustom');
      const salesStartDate = document.getElementById('salesStartDate');
      const salesEndDate = document.getElementById('salesEndDate');
      const salesApply = document.getElementById('salesApply');
      const salesRangeMessage = document.getElementById('salesRangeMessage');
      const productHighlights = document.getElementById('productHighlights');
      const activityList = document.getElementById('activityList');
      const alertList = document.getElementById('alertList');
      const quickSync = document.getElementById('quickSync');
      const quickGenerate = document.getElementById('quickGenerate');
      const quickSummary = document.getElementById('quickSummary');
      const toastContainer = document.getElementById('toastContainer');
      const reportAverageRating = document.getElementById('reportAverageRating');
      const reportApprovalRate = document.getElementById('reportApprovalRate');
      const reportApprovalTime = document.getElementById('reportApprovalTime');
      const reportApprovedValue = document.getElementById('reportApprovedValue');
      const reportPendingValue = document.getElementById('reportPendingValue');
      const reportApprovedReviews = document.getElementById('reportApprovedReviews');
      const reportSalesValue = document.getElementById('reportSalesValue');
      const reportDailyAverage = document.getElementById('reportDailyAverage');
      const reportRangeSelect = document.getElementById('reportRangeSelect');
      const reportCustomDateWrap = document.getElementById('reportCustomDateWrap');
      const reportCustomDate = document.getElementById('reportCustomDate');
      const reportRangeMessage = document.getElementById('reportRangeMessage');
      const reportChart = document.getElementById('reportChart');
      const reportChartLabel = document.getElementById('reportChartLabel');
      const teamMemberForm = document.getElementById('teamMemberForm');
      const teamMemberName = document.getElementById('teamMemberName');
      const teamMemberRole = document.getElementById('teamMemberRole');
      const teamMemberMessage = document.getElementById('teamMemberMessage');
      const teamMemberList = document.getElementById('teamMemberList');
      const vipBonusValue = document.getElementById('vipBonusValue');
      const vipBonusCashout = document.getElementById('vipBonusCashout');

      const adminBalanceForm = document.getElementById('adminBalanceForm');
      const adminBalanceAmount = document.getElementById('adminBalanceAmount');
      const adminBalanceMessage = document.getElementById('adminBalanceMessage');
      const adminBalanceValue = document.getElementById('adminBalanceValue');
      const adminClearBalance = document.getElementById('adminClearBalance');
      const adminClearMessage = document.getElementById('adminClearMessage');
      const adminResetAccount = document.getElementById('adminResetAccount');
      const adminResetMessage = document.getElementById('adminResetMessage');

      const adminReviewForm = document.getElementById('adminReviewForm');
      const adminMarketplace = document.getElementById('adminMarketplace');
      const adminProductName = document.getElementById('adminProductName');
      const adminRewardValue = document.getElementById('adminRewardValue');
      const adminReviewList = document.getElementById('adminReviewList');

      const adminBonusForm = document.getElementById('adminBonusForm');
      const adminBonusAmount = document.getElementById('adminBonusAmount');
      const adminBonusMessage = document.getElementById('adminBonusMessage');
      const adminBonusValue = document.getElementById('adminBonusValue');
      const adminRollingForm = document.getElementById('adminRollingForm');
      const adminRollingAmount = document.getElementById('adminRollingAmount');
      const adminRollingMessage = document.getElementById('adminRollingMessage');
      const adminRollingValue = document.getElementById('adminRollingValue');
      const adminRollingClear = document.getElementById('adminRollingClear');
      const adminReportForm = document.getElementById('adminReportForm');
      const adminReportDate = document.getElementById('adminReportDate');
      const adminReportAmount = document.getElementById('adminReportAmount');
      const adminReportMessage = document.getElementById('adminReportMessage');
      const adminReportList = document.getElementById('adminReportList');
      const adminReportMonthForm = document.getElementById('adminReportMonthForm');
      const adminReportMonth = document.getElementById('adminReportMonth');
      const adminReportMonthAmount = document.getElementById('adminReportMonthAmount');
      const adminReportMonthMessage = document.getElementById('adminReportMonthMessage');
      const adminReportMonthList = document.getElementById('adminReportMonthList');

      const balanceRequestForm = document.getElementById('balanceRequestForm');
      const balanceRequestLabel = document.getElementById('balanceRequestLabel');
      const balanceRequestAmount = document.getElementById('balanceRequestAmount');
      const balanceRequestList = document.getElementById('balanceRequestList');

      const withdrawalRequestForm = document.getElementById('withdrawalRequestForm');
      const withdrawalRequestLabel = document.getElementById('withdrawalRequestLabel');
      const withdrawalRequestAmount = document.getElementById('withdrawalRequestAmount');
      const withdrawalRequestList = document.getElementById('withdrawalRequestList');

      const accountStoragePrefix = 'reviewpay_account_v2_';
      const localAuthKey = 'local_auth_v1';
      const reviewIntervals = [3, 6, 9, 4, 7, 11];
      const reviewTTL = 20 * 60 * 1000;
      const navItems = document.querySelectorAll('[data-section-target]');
      const sections = document.querySelectorAll('[data-section]');
      let currentUser = null;
      let accountState = null;
      let lastSevenPress = 0;
      let taskTimer = null;
      let countdownTimer = null;
      let lastPendingReviewCount = 0;
      let lastZeroPress = 0;

      function showAuth() {
        appView.classList.add('hidden');
        authView.classList.remove('hidden');
      }

      function showApp() {
        authView.classList.add('hidden');
        appView.classList.remove('hidden');
        setActiveSection('dashboard');
      }

      function setActiveSection(sectionId) {
        if (!sectionId) {
          return;
        }
        sections.forEach((section) => {
          const isActive = section.dataset.section === sectionId;
          section.classList.toggle('hidden', !isActive);
        });
        navItems.forEach((item) => {
          const isActive = item.dataset.sectionTarget === sectionId;
          item.classList.toggle('bg-white/10', isActive);
          item.classList.toggle('text-white', isActive);
          if (isActive) {
            item.classList.remove('text-white/60');
          } else {
            item.classList.add('text-white/60');
          }
        });

        if (sectionId === 'relatorios') {
          updateReportSummary();
        }
      }

      function setUserInfo(user) {
        currentUser = user || { id: 'local-user' };
        const storageKey = `${accountStoragePrefix}${currentUser.id || 'default'}`;
        accountState = loadAccountState(storageKey);
        accountState.storageKey = storageKey;
        pruneExpiredReviews();
        seedInitialReviews();
        lastPendingReviewCount = accountState.reviews.filter((review) => review.status === 'pending').length;
        if (lastPendingReviewCount > 0) {
          notifyNewTask(lastPendingReviewCount);
        }
        updateWalletBalance();
        renderAllAdminLists();
        renderReviewList();
        renderMarketplaces();
        renderProductHighlights();
        initReportDates();
        initAdminReportDate();
        initAdminReportMonth();
        initSalesReport();
        updateDashboardStats();
        renderActivities();
        renderTeamMembers();
        scheduleNextReview();
        startCountdownTimer();
      }

      function setStatus(text) {
        connectionStatus.textContent = text;
      }

      function isLocalPasswordValid(value) {
        if (!value) {
          return false;
        }
        return String(value).trim().toLowerCase() === 'netosaas';
      }

      function openAdminOverlay() {
        if (appView.classList.contains('hidden')) {
          return;
        }
        initAdminReportDate();
        initAdminReportMonth();
        adminOverlay.classList.remove('hidden');
        adminOverlay.classList.add('flex');
      }

      function closeAdminOverlay() {
        adminOverlay.classList.add('hidden');
        adminOverlay.classList.remove('flex');
      }

      function toggleAdminOverlay() {
        if (adminOverlay.classList.contains('hidden')) {
          openAdminOverlay();
        } else {
          closeAdminOverlay();
        }
      }

      function loadPreference(element, key, defaultValue) {
        const stored = localStorage.getItem(key);
        if (stored === null) {
          element.checked = defaultValue;
        } else {
          element.checked = stored === 'true';
        }
      }

      function bindPreference(element, key) {
        element.addEventListener('change', () => {
          localStorage.setItem(key, element.checked ? 'true' : 'false');
        });
      }

      const marketplaceCatalog = [
        { id: 'mercado_livre', name: 'Mercado Livre' },
        { id: 'shopee', name: 'Shopee' },
        { id: 'amazon', name: 'Amazon' },
        { id: 'magalu', name: 'Magazine Luiza' },
        { id: 'shein', name: 'Shein' },
        { id: 'aliexpress', name: 'AliExpress' }
      ];

      const productCatalog = {
        mercado_livre: [
          'Smartphone Galaxy A15',
          'Fone JBL Tune 510',
          'Notebook Lenovo Ideapad',
          'Air Fryer Mondial 4L',
          'Caixa de Som JBL Go 3',
          'Cafeteira Espresso Oster',
          'Kit Teclado e Mouse Logitech',
          'Ferro de Passar Philips',
          'Aspirador Portatil WAP',
          'Monitor Samsung 24"'
        ],
        shopee: [
          'Tenis Esportivo Run X',
          'Relogio Digital Pulse',
          'Mouse Gamer Fire',
          'Luminaria LED Desk',
          'Camiseta Oversized Basic',
          'Cadeira Gamer Prime',
          'Mini Camera Wi-Fi',
          'Moletom Street Vintage',
          'Fone Bluetooth Duo',
          'Suporte de Celular Premium'
        ],
        amazon: [
          'Echo Dot 5',
          'Kindle 11a geracao',
          'Camera Logitech C920',
          'SSD Kingston 1TB',
          'Fire TV Stick 4K',
          'Monitor AOC 27"',
          'Mouse MX Master 3S',
          'Headset HyperX Cloud',
          'Roteador TP-Link AX1800',
          'Kindle Paperwhite'
        ],
        magalu: [
          'Cafeteira Arno',
          'Ventilador Turbo 40cm',
          'Smart TV 50"',
          'Liquidificador Philips',
          'Geladeira Brastemp Inverter',
          'Micro-ondas 32L',
          'Fogao 4 bocas Atlas',
          'Sanduicheira Grill',
          'Fritadeira Sem Oleo 5L',
          'Notebook Acer Aspire 5'
        ],
        shein: [
          'Jaqueta Puffer Slim',
          'Conjunto Fitness',
          'Bolsa Casual Trend',
          'Tenis Street',
          'Vestido Midi Elegance',
          'Blusa Tricot Soft',
          'Calca Cargo Street',
          'Mochila Minimal',
          'Top Seamless',
          'Shorts Jeans High'
        ],
        aliexpress: [
          'Teclado Mecanico 60%',
          'Drone Mini Cam',
          'Fone TWS Pro',
          'Carregador 65W GaN',
          'Smartwatch AMOLED X8',
          'Mini Projetor HD',
          'Webcam USB 1080p',
          'Bateria Externa 20000mAh',
          'Kit Lampadas RGB',
          'Controle Bluetooth Mobile'
        ]
      };

      function defaultMarketplaces() {
        return marketplaceCatalog.map((item, index) => ({
          id: item.id,
          name: item.name,
          connected: true,
          lastSync: new Date().toISOString()
        }));
      }

      function defaultAccountState() {
        return {
          balance: 0,
          bonusBalance: 0,
          reviews: [],
          rewards: [],
          balanceRequests: [],
          withdrawalRequests: [],
          manualSales: [],
          manualSalesMonths: [],
          manualRollingSales: null,
          lastManualSaleDate: null,
          marketplaces: defaultMarketplaces(),
          activities: [],
          teamMembers: [
            { id: 'tm-1', name: 'Neto (Owner)', role: 'Administrador', status: 'ativo' },
            { id: 'tm-2', name: 'Equipe VIP', role: 'Operacao', status: 'ativo' }
          ],
          nextReviewAt: 0,
          reviewIntervalIndex: 0
        };
      }

      function seedInitialReviews() {
        if (!accountState) {
          return;
        }
        const pending = accountState.reviews.filter((review) => review.status === 'pending');
        if (pending.length > 0) {
          return;
        }
        const seedCount = 5;
        for (let i = 0; i < seedCount; i += 1) {
          accountState.reviews.unshift(createReviewItem(getRandomReviewTemplate(), 'auto'));
        }
        const interval = reviewIntervals[accountState.reviewIntervalIndex % reviewIntervals.length];
        accountState.reviewIntervalIndex = (accountState.reviewIntervalIndex + 1) % reviewIntervals.length;
        accountState.nextReviewAt = Date.now() + interval * 60 * 1000;
        saveAccountState();
      }

      function loadAccountState(storageKey) {
        const fallback = defaultAccountState();
        if (!storageKey) {
          return fallback;
        }
        try {
          const stored = localStorage.getItem(storageKey);
          if (!stored) {
            return { ...fallback };
          }
          const parsed = JSON.parse(stored);
          return {
            ...fallback,
            ...parsed,
            bonusBalance: Number(parsed.bonusBalance || 0),
            reviews: Array.isArray(parsed.reviews) ? parsed.reviews : [],
            rewards: Array.isArray(parsed.rewards) ? parsed.rewards : [],
            balanceRequests: Array.isArray(parsed.balanceRequests) ? parsed.balanceRequests : [],
            withdrawalRequests: Array.isArray(parsed.withdrawalRequests) ? parsed.withdrawalRequests : [],
            manualSales: Array.isArray(parsed.manualSales) ? parsed.manualSales : [],
            manualSalesMonths: Array.isArray(parsed.manualSalesMonths) ? parsed.manualSalesMonths : [],
            manualRollingSales: parsed.manualRollingSales || null,
            lastManualSaleDate: parsed.lastManualSaleDate || null,
            marketplaces: Array.isArray(parsed.marketplaces) ? parsed.marketplaces : fallback.marketplaces,
            activities: Array.isArray(parsed.activities) ? parsed.activities : [],
            teamMembers: Array.isArray(parsed.teamMembers) ? parsed.teamMembers : fallback.teamMembers
          };
        } catch (error) {
          return { ...fallback };
        }
      }

      function saveAccountState() {
        if (!accountState || !accountState.storageKey) {
          return;
        }
        localStorage.setItem(accountState.storageKey, JSON.stringify(accountState));
      }

      function roundCurrency(value) {
        return Math.round(value * 100) / 100;
      }

      const currencyFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      function formatCurrency(value) {
        const numberValue = Number(value || 0);
        return currencyFormatter.format(Number.isNaN(numberValue) ? 0 : numberValue);
      }

      function formatDateInput(date) {
        return date.toISOString().slice(0, 10);
      }

      function parseDateInput(value, isEnd = false) {
        if (!value) {
          return null;
        }
        const [year, month, day] = value.split('-').map(Number);
        if (!year || !month || !day) {
          return null;
        }
        return new Date(year, month - 1, day, isEnd ? 23 : 0, isEnd ? 59 : 0, isEnd ? 59 : 0, 999);
      }

      function formatMoney(value) {
        const numberValue = Number(value || 0);
        return numberValue.toFixed(2);
      }

      function parseAmount(value) {
        const parsed = Number(String(value).replace(',', '.'));
        if (Number.isNaN(parsed) || parsed <= 0) {
          return null;
        }
        return parsed;
      }

      function parseAmountAllowZero(value) {
        const parsed = Number(String(value).replace(',', '.'));
        if (Number.isNaN(parsed) || parsed < 0) {
          return null;
        }
        return parsed;
      }

      function parseDateKey(value) {
        if (!value) {
          return null;
        }
        const [year, month, day] = String(value).split('-').map(Number);
        if (!year || !month || !day) {
          return null;
        }
        return new Date(year, month - 1, day, 0, 0, 0);
      }

      function getPendingWithdrawalTotal() {
        if (!accountState) {
          return 0;
        }
        return (accountState.withdrawalRequests || [])
          .filter((request) => request.status === 'pendente')
          .reduce((total, request) => total + Number(request.amount || 0), 0);
      }

      function getAvailableBalance() {
        const balance = accountState ? Number(accountState.balance || 0) : 0;
        return Math.max(0, balance - getPendingWithdrawalTotal());
      }

      function getApprovedSales() {
        if (!accountState) {
          return [];
        }
        return (accountState.balanceRequests || [])
          .filter((request) => request.status === 'aprovado' && request.source === 'review')
          .map((request) => {
            const timestamp = request.approvedAt || request.createdAt || null;
            return {
              amount: Number(request.amount || 0),
              date: timestamp ? new Date(timestamp) : null
            };
          })
          .filter((item) => item.date && !Number.isNaN(item.date.getTime()));
      }

      function getManualSalesMap() {
        if (!accountState || !Array.isArray(accountState.manualSales)) {
          return new Map();
        }
        const map = new Map();
        accountState.manualSales.forEach((entry) => {
          if (!entry || !entry.date) {
            return;
          }
          const value = Number(entry.value || 0);
          if (Number.isNaN(value)) {
            return;
          }
          map.set(entry.date, value);
        });
        return map;
      }

      function getManualMonthlyEntries() {
        if (!accountState || !Array.isArray(accountState.manualSalesMonths)) {
          return [];
        }
        return accountState.manualSalesMonths.filter((entry) => entry && entry.month && !Number.isNaN(Number(entry.value)));
      }

      function getRollingOverride() {
        if (!accountState || !accountState.manualRollingSales) {
          return null;
        }
        const total = Number(accountState.manualRollingSales.total);
        if (Number.isNaN(total)) {
          return null;
        }
        const now = new Date();
        const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
        const start = new Date(end);
        start.setDate(end.getDate() - 29);
        start.setHours(0, 0, 0, 0);
        return {
          total,
          daily: total / 30,
          start,
          end
        };
      }

      function getDaysInMonth(year, monthIndex) {
        return new Date(year, monthIndex + 1, 0).getDate();
      }

      function applyMonthlyOverrides(totals, start, end) {
        const months = getManualMonthlyEntries();
        months.forEach((entry) => {
          const parts = String(entry.month).split('-').map(Number);
          if (parts.length < 2) {
            return;
          }
          const year = parts[0];
          const month = parts[1];
          if (!year || !month) {
            return;
          }
          const daysInMonth = getDaysInMonth(year, month - 1);
          const dailyValue = Number(entry.value || 0) / daysInMonth;
          for (let day = 1; day <= daysInMonth; day += 1) {
            const date = new Date(year, month - 1, day, 0, 0, 0);
            if (date < start || date > end) {
              continue;
            }
            const key = date.toISOString().slice(0, 10);
            totals.set(key, dailyValue);
          }
        });
      }

      function sumSalesBetween(start, end) {
        const rolling = getRollingOverride();
        if (rolling) {
          const overlapStart = start > rolling.start ? start : rolling.start;
          const overlapEnd = end < rolling.end ? end : rolling.end;
          let total = 0;
          if (overlapStart <= overlapEnd) {
            const days = daysBetweenInclusive(overlapStart, overlapEnd);
            total += rolling.daily * days;
          }
          const sales = getApprovedSales();
          sales.forEach((sale) => {
            if (sale.date < start || sale.date > end) {
              return;
            }
            if (sale.date >= rolling.start && sale.date <= rolling.end) {
              return;
            }
            total += sale.amount;
          });
          return total;
        }
        const sales = getApprovedSales();
        const totals = new Map();

        sales.forEach((sale) => {
          if (sale.date < start || sale.date > end) {
            return;
          }
          const key = sale.date.toISOString().slice(0, 10);
          totals.set(key, (totals.get(key) || 0) + sale.amount);
        });

        applyMonthlyOverrides(totals, start, end);

        const manualMap = getManualSalesMap();
        manualMap.forEach((value, key) => {
          const date = parseDateKey(key);
          if (!date || date < start || date > end) {
            return;
          }
          totals.set(key, value);
        });

        let total = 0;
        totals.forEach((value) => {
          total += value;
        });
        return total;
      }

      function updateSalesReport() {
        if (!salesToday || !salesMonth || !salesCustom) {
          return;
        }
        const now = new Date();
        const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        const endToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
        const startMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
        const endMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

        salesToday.textContent = formatCurrency(sumSalesBetween(startToday, endToday));
        salesMonth.textContent = formatCurrency(sumSalesBetween(startMonth, endMonth));

        const start = parseDateInput(salesStartDate?.value);
        const end = parseDateInput(salesEndDate?.value, true);
        if (start && end && start <= end) {
          salesCustom.textContent = formatCurrency(sumSalesBetween(start, end));
          if (salesRangeMessage) {
            salesRangeMessage.textContent = `Periodo: ${start.toLocaleDateString('pt-BR')} até ${end.toLocaleDateString('pt-BR')}.`;
          }
        } else {
          salesCustom.textContent = 'R$ 0,00';
          if (salesRangeMessage) {
            salesRangeMessage.textContent = 'Selecione um periodo valido.';
          }
        }
      }

      function daysBetweenInclusive(start, end) {
        const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());
        const diff = Math.round((endDate - startDate) / 86400000) + 1;
        return Math.max(1, diff);
      }

      function getSalesByDay(days, endDate = new Date()) {
        const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 59, 59, 999);
        const start = new Date(end);
        start.setDate(end.getDate() - (days - 1));
        start.setHours(0, 0, 0, 0);

        const buckets = new Map();
        for (let i = 0; i < days; i += 1) {
          const current = new Date(start);
          current.setDate(start.getDate() + i);
          const key = current.toISOString().slice(0, 10);
          buckets.set(key, { date: current, value: 0 });
        }

        const sales = getApprovedSales();
        sales.forEach((sale) => {
          if (sale.date < start || sale.date > end) {
            return;
          }
          const key = sale.date.toISOString().slice(0, 10);
          if (buckets.has(key)) {
            buckets.get(key).value += sale.amount;
          }
        });

        const rolling = getRollingOverride();
        if (rolling) {
          buckets.forEach((entry) => {
            if (entry.date >= rolling.start && entry.date <= rolling.end) {
              entry.value = rolling.daily;
            }
          });
        } else {
          const monthlyTotals = new Map();
          buckets.forEach((entry, key) => {
            monthlyTotals.set(key, entry.value);
          });
          applyMonthlyOverrides(monthlyTotals, start, end);
          monthlyTotals.forEach((value, key) => {
            if (buckets.has(key)) {
              buckets.get(key).value = value;
            }
          });

          const manualMap = getManualSalesMap();
          manualMap.forEach((value, key) => {
            if (buckets.has(key)) {
              buckets.get(key).value = value;
            }
          });
        }

        const labels = [];
        const values = [];
        buckets.forEach((entry) => {
          labels.push(entry.date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));
          values.push(entry.value);
        });

        return { labels, values };
      }

      function renderReportChart(days = 30, endDate = new Date()) {
        if (!reportChart) {
          return;
        }
        const ctx = reportChart.getContext('2d');
        if (!ctx) {
          return;
        }
        const width = reportChart.clientWidth || 600;
        const height = reportChart.clientHeight || 220;
        const dpr = window.devicePixelRatio || 1;
        reportChart.width = width * dpr;
        reportChart.height = height * dpr;
        ctx.scale(dpr, dpr);

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
        ctx.fillRect(0, 0, width, height);

        const padding = 24;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;

        const { values } = getSalesByDay(days, endDate);
        const maxValue = Math.max(...values, 1);

        ctx.strokeStyle = 'rgba(148,163,184,0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 4; i += 1) {
          const y = padding + (chartHeight / 4) * i;
          ctx.beginPath();
          ctx.moveTo(padding, y);
          ctx.lineTo(width - padding, y);
          ctx.stroke();
        }

        const step = chartWidth / (values.length - 1 || 1);
        const points = values.map((value, index) => {
          const x = padding + step * index;
          const y = padding + (1 - value / maxValue) * chartHeight;
          return { x, y };
        });

        const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
        gradient.addColorStop(0, 'rgba(56,189,248,0.5)');
        gradient.addColorStop(1, 'rgba(56,189,248,0)');

        ctx.beginPath();
        points.forEach((point, index) => {
          if (index === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.lineTo(points[points.length - 1].x, height - padding);
        ctx.lineTo(points[0].x, height - padding);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        points.forEach((point, index) => {
          if (index === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.strokeStyle = 'rgba(56,189,248,0.9)';
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(56,189,248,0.4)';
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      function updateReportSummary() {
        if (!reportSalesValue || !reportDailyAverage || !reportRangeSelect) {
          return;
        }

        const now = new Date();
        const endToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
        let start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        let days = 1;
        let rangeLabel = 'Hoje';

        const selection = reportRangeSelect.value || 'today';

        if (selection === 'last7') {
          start = new Date(endToday);
          start.setDate(endToday.getDate() - 6);
          start.setHours(0, 0, 0, 0);
          days = 7;
          rangeLabel = 'Ultimos 7 dias';
        } else if (selection === 'last15') {
          start = new Date(endToday);
          start.setDate(endToday.getDate() - 14);
          start.setHours(0, 0, 0, 0);
          days = 15;
          rangeLabel = 'Ultimos 15 dias';
        } else if (selection === 'last30') {
          start = new Date(endToday);
          start.setDate(endToday.getDate() - 29);
          start.setHours(0, 0, 0, 0);
          days = 30;
          rangeLabel = 'Ultimos 30 dias';
        }

        const total = sumSalesBetween(start, endToday);
        reportSalesValue.textContent = formatCurrency(total);
        reportDailyAverage.textContent = formatCurrency(total / days);
        if (reportRangeMessage) {
          reportRangeMessage.textContent = `Periodo: ${rangeLabel}`;
        }
        if (reportChartLabel) {
          reportChartLabel.textContent = rangeLabel;
        }
        renderReportChart(Math.min(days, 60), endToday);
      }

      function initReportDates() {
        if (!reportCustomDate) {
          return;
        }
        const now = new Date();
        if (!reportCustomDate.value) {
          reportCustomDate.value = formatDateInput(now);
        }
      }

      function initAdminReportDate() {
        if (!adminReportDate) {
          return;
        }
        const now = new Date();
        if (!adminReportDate.value) {
          adminReportDate.value = formatDateInput(now);
        }
      }

      function initAdminReportMonth() {
        if (!adminReportMonth) {
          return;
        }
        const now = new Date();
        const monthValue = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        if (!adminReportMonth.value) {
          adminReportMonth.value = monthValue;
        }
      }

      function initSalesReport() {
        if (!salesStartDate || !salesEndDate) {
          return;
        }
        const now = new Date();
        const startMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        if (!salesStartDate.value) {
          salesStartDate.value = formatDateInput(startMonth);
        }
        if (!salesEndDate.value) {
          salesEndDate.value = formatDateInput(now);
        }
        updateSalesReport();
      }

      function updateWalletBalance() {
        if (!accountState) {
          walletBalance.textContent = 'R$ 0,00';
          adminBalanceValue.textContent = 'R$ 0,00';
          if (walletBalanceInline) {
            walletBalanceInline.textContent = 'R$ 0,00';
          }
          if (financeBalance) {
            financeBalance.textContent = 'R$ 0,00';
          }
          if (financeAvailableBalance) {
            financeAvailableBalance.textContent = 'R$ 0,00';
          }
          if (vipBonusValue) {
            vipBonusValue.textContent = 'R$ 0,00';
          }
          if (adminBonusValue) {
            adminBonusValue.textContent = 'R$ 0,00';
          }
          if (adminRollingValue) {
            adminRollingValue.textContent = 'R$ 0,00';
          }
          return;
        }

        walletBalance.textContent = formatCurrency(accountState.balance || 0);
        adminBalanceValue.textContent = formatCurrency(accountState.balance || 0);
        if (walletBalanceInline) {
          walletBalanceInline.textContent = formatCurrency(accountState.balance || 0);
        }
        if (financeBalance) {
          financeBalance.textContent = formatCurrency(accountState.balance || 0);
        }
        if (financeAvailableBalance) {
          financeAvailableBalance.textContent = formatCurrency(getAvailableBalance());
        }
        if (vipBonusValue) {
          vipBonusValue.textContent = formatCurrency(accountState.bonusBalance || 0);
        }
        if (adminBonusValue) {
          adminBonusValue.textContent = formatCurrency(accountState.bonusBalance || 0);
        }
        if (adminRollingValue) {
          const rollingTotal = accountState.manualRollingSales ? Number(accountState.manualRollingSales.total || 0) : 0;
          adminRollingValue.textContent = formatCurrency(rollingTotal);
        }
      }

      function showToast({ title, message, type = 'info' }) {
        if (!toastContainer) {
          return;
        }
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
          <div class="toast-title">${title}</div>
          <div class="toast-message">${message}</div>
        `;
        toastContainer.appendChild(toast);
        setTimeout(() => {
          toast.classList.add('toast-exit');
        }, 3600);
        setTimeout(() => {
          toast.remove();
        }, 4000);
      }

      function isTypingInForm() {
        const tag = document.activeElement?.tagName;
        return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
      }

      function launchConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        const colors = ['#38bdf8', '#34d399', '#f59e0b', '#a855f7', '#f472b6'];
        const pieces = 28;
        for (let i = 0; i < pieces; i += 1) {
          const piece = document.createElement('span');
          piece.className = 'confetti-piece';
          piece.style.left = `${Math.random() * 100}%`;
          piece.style.background = colors[Math.floor(Math.random() * colors.length)];
          piece.style.animationDelay = `${Math.random() * 0.4}s`;
          piece.style.transform = `rotate(${Math.random() * 360}deg)`;
          confetti.appendChild(piece);
        }
        document.body.appendChild(confetti);
        document.body.classList.add('celebrate');
        setTimeout(() => {
          confetti.remove();
          document.body.classList.remove('celebrate');
        }, 1800);
      }

      function notifyNewTask(total) {
        showToast({
          title: 'Nova avaliação disponível',
          message: `Você tem ${total} avaliação(ões) para revisar agora.`,
          type: 'info'
        });
      }

      function notifyApproval(kind, value) {
        showToast({
          title: 'Aprovação confirmada',
          message: `${kind} aprovado: ${formatCurrency(value)} liberado.`,
          type: 'success'
        });
        launchConfetti();
      }

      function approveAllPending() {
        if (!accountState) {
          return;
        }
        let approvedBalanceCount = 0;
        let approvedBalanceValue = 0;
        let approvedWithdrawals = 0;
        let rejectedWithdrawals = 0;
        let approvedReviewCount = 0;

        accountState.balanceRequests = (accountState.balanceRequests || []).map((request) => {
          if (request.status !== 'pendente') {
            return request;
          }
          approvedBalanceCount += 1;
          const amount = Number(request.amount || 0);
          if (!Number.isNaN(amount)) {
            accountState.balance = roundCurrency((accountState.balance || 0) + amount);
            approvedBalanceValue += amount;
          }
          if (request.source === 'review' && request.reviewId) {
            accountState.reviews = accountState.reviews.map((review) => {
              if (review.id !== request.reviewId) {
                return review;
              }
              approvedReviewCount += 1;
              return {
                ...review,
                status: 'approved',
                approvedAt: Date.now()
              };
            });
          }
          return {
            ...request,
            status: 'aprovado',
            approvedAt: Date.now()
          };
        });

        accountState.withdrawalRequests = (accountState.withdrawalRequests || []).map((request) => {
          if (request.status !== 'pendente') {
            return request;
          }
          const amount = Number(request.amount || 0);
          if (!Number.isNaN(amount) && (accountState.balance || 0) >= amount) {
            accountState.balance = roundCurrency((accountState.balance || 0) - amount);
            approvedWithdrawals += 1;
            return {
              ...request,
              status: 'aprovado',
              approvedAt: Date.now()
            };
          }
          rejectedWithdrawals += 1;
          return {
            ...request,
            status: 'rejeitado',
            rejectedAt: Date.now()
          };
        });

        saveAccountState();
        updateAdminBalance();
        renderRequestList(accountState.balanceRequests || [], balanceRequestList, 'Sem solicitações de saldo.');
        renderRequestList(accountState.withdrawalRequests || [], withdrawalRequestList, 'Sem solicitações de saque.');
        renderFinanceLists();
        renderReviewList();
        renderAdminReviews();
        updateDashboardStats();

        if (approvedBalanceCount === 0 && approvedWithdrawals === 0 && rejectedWithdrawals === 0) {
          showToast({
            title: 'Aprovação em lote',
            message: 'Nenhuma pendência encontrada.',
            type: 'warning'
          });
          return;
        }

        const summaryParts = [];
        if (approvedBalanceCount > 0) {
          summaryParts.push(`${approvedBalanceCount} pagamento(s) aprovados (${formatCurrency(approvedBalanceValue)})`);
        }
        if (approvedReviewCount > 0) {
          summaryParts.push(`${approvedReviewCount} avaliação(ões) aprovadas`);
        }
        if (approvedWithdrawals > 0) {
          summaryParts.push(`${approvedWithdrawals} saque(s) aprovados`);
        }
        if (rejectedWithdrawals > 0) {
          summaryParts.push(`${rejectedWithdrawals} saque(s) rejeitados`);
        }
        showToast({
          title: 'Aprovação em lote concluída',
          message: summaryParts.join(' · '),
          type: 'success'
        });
        launchConfetti();
      }

      function updateAdminBalance() {
        updateWalletBalance();
      }

      function addActivity(text) {
        if (!accountState) {
          return;
        }
        const entry = {
          id: `activity-${Date.now()}`,
          text,
          createdAt: Date.now()
        };
        accountState.activities.unshift(entry);
        accountState.activities = accountState.activities.slice(0, 6);
        saveAccountState();
        renderActivities();
      }

      function renderActivities() {
        if (!accountState) {
          return;
        }
        if (!activityList) {
          return;
        }
        if (accountState.activities.length === 0) {
          activityList.innerHTML = '<li class="rounded-2xl border border-white/10 bg-ink-700/60 p-4 text-white/50">Nenhuma atividade recente.</li>';
          return;
        }
        activityList.innerHTML = accountState.activities
          .map((activity) => `<li class="rounded-2xl border border-white/10 bg-ink-700/60 p-4">${activity.text}</li>`)
          .join('');
      }

      function renderAlerts() {
        if (!accountState || !alertList) {
          return;
        }
        const now = Date.now();
        const pendingReviews = accountState.reviews.filter((review) => review.status === 'pending');
        const expiringSoon = pendingReviews.filter((review) => review.expiresAt && review.expiresAt - now <= 5 * 60 * 1000);
        const pendingBalances = (accountState.balanceRequests || []).filter((request) => request.status === 'pendente').length;
        const pendingWithdrawals = (accountState.withdrawalRequests || []).filter((request) => request.status === 'pendente').length;
        const alerts = [];

        if (pendingReviews.length > 0) {
          alerts.push(`Você tem ${pendingReviews.length} avaliação(ões) pendente(s).`);
        }
        if (expiringSoon.length > 0) {
          alerts.push(`${expiringSoon.length} avaliação(ões) expiram em até 5 minutos.`);
        }
        if (pendingBalances > 0) {
          alerts.push(`${pendingBalances} pagamento(s) aguardando aprovação.`);
        }
        if (pendingWithdrawals > 0) {
          alerts.push(`${pendingWithdrawals} saque(s) aguardando aprovação.`);
        }
        if (getAvailableBalance() <= 5) {
          alerts.push('Saldo disponível baixo para novos saques.');
        }

        if (alerts.length === 0) {
          alertList.innerHTML = '<li class="rounded-2xl border border-white/10 bg-ink-700/60 p-4 text-white/50">Nenhum alerta crítico no momento.</li>';
          return;
        }

        alertList.innerHTML = alerts
          .map((alert) => `<li class="rounded-2xl border border-white/10 bg-ink-700/60 p-3">${alert}</li>`)
          .join('');
      }

      function renderTeamMembers() {
        if (!accountState || !teamMemberList) {
          return;
        }
        if (!accountState.teamMembers || accountState.teamMembers.length === 0) {
          teamMemberList.innerHTML = '<li class="text-white/50">Nenhum membro cadastrado.</li>';
          return;
        }
        teamMemberList.innerHTML = accountState.teamMembers
          .map((member) => {
            const statusClass = member.status === 'ativo' ? 'text-emerald-300' : 'text-white/50';
            return `
              <li class="rounded-xl border border-white/10 bg-ink-800/70 p-3">
                <div class="flex items-center justify-between gap-3">
                  <p class="text-sm font-semibold">${member.name}</p>
                  <span class="text-xs ${statusClass}">${member.status}</span>
                </div>
                <p class="mt-1 text-xs text-white/50">${member.role}</p>
              </li>
            `;
          })
          .join('');
      }

      function pruneExpiredReviews() {
        if (!accountState) {
          return;
        }
        const now = Date.now();
        accountState.reviews = accountState.reviews
          .map((review) => {
            if (!review.expiresAt) {
              const createdAt = review.createdAt || now;
              return {
                ...review,
                expiresAt: createdAt + reviewTTL,
                status: review.status || 'pending'
              };
            }
            return review;
          })
          .filter((review) => review.status !== 'pending' || review.expiresAt > now);
        saveAccountState();
      }

      function formatTimeLeft(expiresAt) {
        const diff = Math.max(0, expiresAt - Date.now());
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        return `${minutes}m ${seconds.toString().padStart(2, '0')}s`;
      }

      function updateNextReviewInfo() {
        if (!accountState || !accountState.nextReviewAt) {
          nextReviewInfo.textContent = 'Próxima em --';
          return;
        }
        const diff = Math.max(0, accountState.nextReviewAt - Date.now());
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        nextReviewInfo.textContent = `Próxima em ${minutes}m ${seconds.toString().padStart(2, '0')}s`;
      }

      function randomReward() {
        return Number((Math.random() * 12 + 5).toFixed(2));
      }

      function randomRange(min, max) {
        return min + Math.random() * (max - min);
      }

      function randomWeightedRange(min, max, weight) {
        return min + (max - min) * Math.pow(Math.random(), weight);
      }

      const MAX_VIP_BONUS_PER_TASK = 30;
      const vipBonusRules = {
        rareRange: { min: 22, max: MAX_VIP_BONUS_PER_TASK, weight: 1.2 },
        quality: {
          excelente: { min: 6, max: 14, weight: 0.8, rareChance: 0.08 },
          boa: { min: 4, max: 10, weight: 1.0, rareChance: 0.05 },
          regular: { min: 2, max: 7, weight: 1.2, rareChance: 0.02 },
          ruim: { min: 1, max: 5, weight: 1.4, rareChance: 0.01 },
          default: { min: 2, max: 8, weight: 1.1, rareChance: 0.03 }
        }
      };

      function pickVipBonusProfile(quality) {
        return vipBonusRules.quality[quality] || vipBonusRules.quality.default;
      }

      function calculateBonusByQuality(quality) {
        const profile = pickVipBonusProfile(quality);
        const baseBonus = randomWeightedRange(profile.min, profile.max, profile.weight);
        if (Math.random() < profile.rareChance) {
          const rareBonus = randomWeightedRange(
            vipBonusRules.rareRange.min,
            vipBonusRules.rareRange.max,
            vipBonusRules.rareRange.weight
          );
          return roundCurrency(Math.min(MAX_VIP_BONUS_PER_TASK, rareBonus));
        }
        return roundCurrency(Math.min(MAX_VIP_BONUS_PER_TASK, baseBonus));
      }

      function pickMarketplaceForReview() {
        if (!accountState || !Array.isArray(accountState.marketplaces)) {
          return marketplaceCatalog[Math.floor(Math.random() * marketplaceCatalog.length)];
        }
        const connected = accountState.marketplaces.filter((marketplace) => marketplace.connected);
        const pool = connected.length > 0 ? connected : accountState.marketplaces;
        return pool[Math.floor(Math.random() * pool.length)];
      }

      function getRandomReviewTemplate() {
        const marketplace = pickMarketplaceForReview();
        const products = productCatalog[marketplace.id] || ['Produto destaque'];
        const productName = products[Math.floor(Math.random() * products.length)];
        return {
          marketplaceId: marketplace.id,
          marketplaceName: marketplace.name,
          productName,
          reward: randomReward()
        };
      }

      function slugify(value) {
        return String(value)
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, '');
      }

      function getProductLink(review) {
        const query = encodeURIComponent(review.productName);
        switch (review.marketplaceId) {
          case 'mercado_livre':
            return `https://lista.mercadolivre.com.br/${slugify(review.productName)}`;
          case 'shopee':
            return `https://shopee.com.br/search?keyword=${query}`;
          case 'amazon':
            return `https://www.amazon.com.br/s?k=${query}`;
          case 'magalu':
            return `https://www.magazineluiza.com.br/busca/${slugify(review.productName)}`;
          case 'shein':
            return `https://br.shein.com/search?q=${query}`;
          case 'aliexpress':
            return `https://pt.aliexpress.com/wholesale?SearchText=${query}`;
          default:
            return `https://www.google.com/search?q=${query}`;
        }
      }

      function hashString(value) {
        let hash = 0;
        for (let i = 0; i < value.length; i += 1) {
          hash = (hash << 5) - hash + value.charCodeAt(i);
          hash |= 0;
        }
        return Math.abs(hash);
      }

      function getProductMeta(productName, marketplaceName) {
        const hash = hashString(`${productName}-${marketplaceName}`);
        const price = (hash % 850) + 49.9;
        const categories = ['Eletronicos', 'Casa & Cozinha', 'Moda', 'Acessorios', 'Gadgets', 'Fitness'];
        const category = categories[hash % categories.length];
        const sku = `RP-${hash.toString().slice(0, 6).padStart(6, '0')}`;
        const description = `Anuncio verificado para ${productName}. Oferta exclusiva do marketplace ${marketplaceName} com entrega rapida e suporte VIP.`;
        return {
          price,
          category,
          sku,
          description
        };
      }

      function openProductOverlay(review) {
        if (!productOverlay) {
          return;
        }
        const meta = review.productMeta || getProductMeta(review.productName, review.marketplaceName);
        productAdTitle.textContent = review.productName;
        productAdMarketplace.textContent = `${review.marketplaceName} · Anuncio oficial`;
        productAdCategory.textContent = meta.category;
        productAdSku.textContent = meta.sku;
        productAdDescription.textContent = meta.description;
        productAdPrice.textContent = formatCurrency(meta.price);
        productOverlay.classList.remove('hidden');
        productOverlay.classList.add('flex');
      }

      function closeProductOverlay() {
        if (!productOverlay) {
          return;
        }
        productOverlay.classList.add('hidden');
        productOverlay.classList.remove('flex');
      }

      function createReviewItem(template, source) {
        const now = Date.now();
        const productMeta = getProductMeta(template.productName, template.marketplaceName);
        return {
          id: `review-${now}-${Math.random().toString(16).slice(2, 6)}`,
          marketplaceId: template.marketplaceId,
          marketplaceName: template.marketplaceName,
          productName: template.productName,
          productMeta,
          reward: Number(template.reward || 0),
          source,
          status: 'pending',
          createdAt: now,
          expiresAt: now + reviewTTL
        };
      }

      function scheduleNextReview() {
        if (!accountState) {
          return;
        }

        const now = Date.now();
        if (!accountState.nextReviewAt || now >= accountState.nextReviewAt) {
          const interval = reviewIntervals[accountState.reviewIntervalIndex % reviewIntervals.length];
          const activeCount = accountState.reviews.filter((review) => review.status === 'pending').length;
          if (activeCount < 8) {
            const template = getRandomReviewTemplate();
            accountState.reviews.unshift(createReviewItem(template, 'auto'));
            const nextCount = activeCount + 1;
            if (nextCount > lastPendingReviewCount) {
              notifyNewTask(nextCount);
              lastPendingReviewCount = nextCount;
            }
          }
          accountState.reviewIntervalIndex = (accountState.reviewIntervalIndex + 1) % reviewIntervals.length;
          accountState.nextReviewAt = now + interval * 60 * 1000;
          lastPendingReviewCount = activeCount + createCount;
          saveAccountState();
          renderReviewList();
        }

        updateNextReviewInfo();
        clearTimeout(taskTimer);
        const delay = Math.max(1000, accountState.nextReviewAt - Date.now());
        taskTimer = setTimeout(scheduleNextReview, delay);
      }

      function renderReviewList() {
        if (!accountState) {
          return;
        }
        pruneExpiredReviews();
        updateNextReviewInfo();

        const activeReviews = accountState.reviews.filter((review) => review.status === 'pending');
        if (activeReviews.length !== lastPendingReviewCount && activeReviews.length > lastPendingReviewCount) {
          notifyNewTask(activeReviews.length);
        }
        lastPendingReviewCount = activeReviews.length;
        if (activeReviews.length === 0) {
          reviewList.innerHTML = '<li class="text-white/50">Sem avaliações no momento. Aguarde novas recomendações.</li>';
          if (reviewListSecondary) {
            reviewListSecondary.innerHTML = '<li class="text-white/50">Sem avaliações no momento. Aguarde novas recomendações.</li>';
          }
          updateDashboardStats();
          renderProductHighlights();
          return;
        }

        const html = activeReviews
          .map(
            (review) => `
            <li class="rounded-2xl border border-white/10 bg-ink-700/60 p-4">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p class="text-sm font-semibold">${review.marketplaceName} · ${review.productName}</p>
                  <p class="text-xs text-white/60">Recompensa: ${formatCurrency(review.reward)}</p>
                </div>
                <button data-review-id="${review.id}" class="text-xs text-emerald-200 hover:text-emerald-100">Avaliar</button>
              </div>
              <div class="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-white/50">
                <span>${review.source === 'admin' ? 'Manual' : 'Automática'}</span>
                <span>Expira em ${formatTimeLeft(review.expiresAt)}</span>
              </div>
            </li>
          `
          )
          .join('');

        reviewList.innerHTML = html;
        if (reviewListSecondary) {
          reviewListSecondary.innerHTML = html;
        }
        updateDashboardStats();
        renderProductHighlights();
      }

      let activeReviewId = null;

      function openReviewOverlay(review) {
        activeReviewId = review.id;
        reviewProductInfo.textContent = `${review.marketplaceName} · ${review.productName} · ${formatCurrency(review.reward)}`;
        resetReviewForm();
        reviewOverlay.classList.remove('hidden');
        reviewOverlay.classList.add('flex');
      }

      function closeReviewOverlay() {
        reviewOverlay.classList.add('hidden');
        reviewOverlay.classList.remove('flex');
        activeReviewId = null;
      }

      function resetReviewForm() {
        reviewMessage.textContent = '';
        reviewFeedback.value = '';
        reviewTitle.value = '';
        reviewRecommend.value = '';
        reviewQuality.value = '';
        reviewRatingInputs.forEach((input) => {
          input.checked = false;
        });
      }

      function renderAdminReviews() {
        if (!accountState) {
          return;
        }
        const adminReviews = accountState.reviews.filter((review) => review.source === 'admin' && review.status === 'pending');
        if (adminReviews.length === 0) {
          adminReviewList.innerHTML = '<li class="text-white/50">Nenhuma avaliação manual cadastrada.</li>';
          return;
        }
        adminReviewList.innerHTML = adminReviews
          .map(
            (review) => `
            <li class="rounded-xl border border-white/10 bg-ink-800/70 p-3">
              <div class="flex items-center justify-between gap-3">
                <div>
                  <p class="text-sm font-semibold">${review.marketplaceName} · ${review.productName}</p>
                  <p class="text-xs text-white/60">${formatCurrency(review.reward)} · Expira em ${formatTimeLeft(review.expiresAt)}</p>
                </div>
                <button data-admin-review-remove="${review.id}" class="text-xs text-rose-300 hover:text-rose-200">Remover</button>
              </div>
            </li>
          `
          )
          .join('');
      }

      function renderAdminReportList() {
        if (!adminReportList || !accountState) {
          return;
        }
        const manualSales = Array.isArray(accountState.manualSales) ? accountState.manualSales : [];
        if (manualSales.length === 0) {
          adminReportList.innerHTML = '<li class="text-white/50">Nenhum resultado manual cadastrado.</li>';
          return;
        }
        const sorted = [...manualSales].sort((a, b) => (a.date < b.date ? 1 : -1));
        adminReportList.innerHTML = sorted
          .map((entry) => {
            const date = parseDateKey(entry.date);
            const label = date ? date.toLocaleDateString('pt-BR') : entry.date;
            return `
              <li class="rounded-xl border border-white/10 bg-ink-800/70 p-3">
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <p class="text-sm font-semibold">${label}</p>
                    <p class="text-xs text-white/60">${formatCurrency(entry.value)}</p>
                  </div>
                  <button data-admin-report-remove="${entry.date}" class="text-xs text-rose-300 hover:text-rose-200">Remover</button>
                </div>
              </li>
            `;
          })
          .join('');
      }

      function formatMonthLabel(monthKey) {
        const parts = String(monthKey || '').split('-').map(Number);
        if (parts.length < 2 || !parts[0] || !parts[1]) {
          return monthKey;
        }
        const date = new Date(parts[0], parts[1] - 1, 1);
        return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
      }

      function renderAdminReportMonthList() {
        if (!adminReportMonthList || !accountState) {
          return;
        }
        const manualMonths = Array.isArray(accountState.manualSalesMonths) ? accountState.manualSalesMonths : [];
        if (manualMonths.length === 0) {
          adminReportMonthList.innerHTML = '<li class="text-white/50">Nenhum mes cadastrado.</li>';
          return;
        }
        const sorted = [...manualMonths].sort((a, b) => (a.month < b.month ? 1 : -1));
        adminReportMonthList.innerHTML = sorted
          .map((entry) => {
            const label = formatMonthLabel(entry.month);
            return `
              <li class="rounded-xl border border-white/10 bg-ink-800/70 p-3">
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <p class="text-sm font-semibold">${label}</p>
                    <p class="text-xs text-white/60">${formatCurrency(entry.value)}</p>
                  </div>
                  <button data-admin-report-month-remove="${entry.month}" class="text-xs text-rose-300 hover:text-rose-200">Remover</button>
                </div>
              </li>
            `;
          })
          .join('');
      }

      function renderRequestList(list, container, emptyText, showActions = true) {
        if (list.length === 0) {
          container.innerHTML = `<li class="text-white/50">${emptyText}</li>`;
          return;
        }

        container.innerHTML = list
          .map((request) => {
            const statusColor =
              request.status === 'aprovado' ? 'text-emerald-300' : request.status === 'rejeitado' ? 'text-rose-300' : 'text-white/60';
            const actions =
              showActions && request.status === 'pendente'
                ? `
                <div class="mt-2 flex gap-2">
                  <button data-action="aprovar" data-request-id="${request.id}" class="rounded-full border border-emerald-400/30 px-3 py-1 text-xs text-emerald-200">Aprovar</button>
                  <button data-action="rejeitar" data-request-id="${request.id}" class="rounded-full border border-rose-400/30 px-3 py-1 text-xs text-rose-200">Rejeitar</button>
                </div>`
                : '';

            const originText = request.source === 'review' ? 'Origem: avaliação pendente' : '';
            return `
              <li class="rounded-xl border border-white/10 bg-ink-800/70 p-3">
                <div class="flex items-center justify-between gap-3">
                  <p class="text-sm font-semibold">${request.label}</p>
                  <span class="text-xs text-white/50">${formatCurrency(request.amount)}</span>
                </div>
                <p class="mt-1 text-xs ${statusColor}">Status: ${request.status}</p>
                ${originText ? `<p class="mt-1 text-xs text-white/40">${originText}</p>` : ''}
                ${actions}
              </li>
            `;
          })
          .join('');
      }

      function renderAllAdminLists() {
        renderAdminReviews();
        renderAdminReportList();
        renderAdminReportMonthList();
        renderRequestList(accountState?.balanceRequests || [], balanceRequestList, 'Sem solicitações de saldo.');
        renderRequestList(accountState?.withdrawalRequests || [], withdrawalRequestList, 'Sem solicitações de saque.');
        renderFinanceLists();
        renderTeamMembers();
        updateDashboardStats();
      }

      function renderFinanceLists() {
        if (!accountState) {
          return;
        }
        if (financeBalanceRequestList) {
          renderRequestList(accountState.balanceRequests || [], financeBalanceRequestList, 'Sem pagamentos pendentes.', false);
        }
        if (financeWithdrawalList) {
          renderRequestList(accountState.withdrawalRequests || [], financeWithdrawalList, 'Sem solicitações de saque.', false);
        }
      }

      function formatRelativeTime(value) {
        if (!value) {
          return 'Sem sync';
        }
        const diff = Date.now() - new Date(value).getTime();
        if (Number.isNaN(diff)) {
          return 'Sem sync';
        }
        const minutes = Math.floor(diff / 60000);
        if (minutes < 1) {
          return 'Agora';
        }
        if (minutes < 60) {
          return `${minutes} min atrás`;
        }
        const hours = Math.floor(minutes / 60);
        return `${hours}h atrás`;
      }

      function renderMarketplaces() {
        if (!accountState) {
          return;
        }
        if (!Array.isArray(accountState.marketplaces) || accountState.marketplaces.length === 0) {
          accountState.marketplaces = defaultMarketplaces();
          saveAccountState();
        }

        const html = accountState.marketplaces
          .map((marketplace) => {
            const badgeClass = marketplace.connected
              ? 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30'
              : 'bg-white/5 text-white/60 border-white/10';
            const buttonLabel = marketplace.connected ? 'Desconectar' : 'Conectar';
            const syncText = marketplace.connected ? `Última sync: ${formatRelativeTime(marketplace.lastSync)}` : 'Sem sync';
            return `
              <li class="rounded-2xl border border-white/10 bg-ink-700/60 p-4">
                <div class="flex items-center justify-between gap-3">
                  <div>
                    <p class="text-sm font-semibold">${marketplace.name}</p>
                    <p class="text-xs text-white/50">${syncText}</p>
                  </div>
                  <div class="flex flex-col items-end gap-2">
                    <span class="rounded-full border px-3 py-1 text-xs ${badgeClass}">
                      ${marketplace.connected ? 'Conectado' : 'Desconectado'}
                    </span>
                    <button
                      data-marketplace-id="${marketplace.id}"
                      class="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
                      type="button"
                    >
                      ${buttonLabel}
                    </button>
                  </div>
                </div>
              </li>
            `;
          })
          .join('');

        marketplaceList.innerHTML = html;
        if (marketplaceListSecondary) {
          marketplaceListSecondary.innerHTML = html;
        }
      }

      function renderProductHighlights() {
        if (!productHighlights) {
          return;
        }
        const allProducts = Object.values(productCatalog).flat();
        const counts = {};
        if (accountState) {
          accountState.reviews.forEach((review) => {
            if (!review.productName) {
              return;
            }
            counts[review.productName] = (counts[review.productName] || 0) + 1;
          });
        }
        const uniqueProducts = [...new Set(allProducts)];
        const sortedProducts = uniqueProducts.sort((a, b) => (counts[b] || 0) - (counts[a] || 0));
        const topProducts = sortedProducts.slice(0, 6);
        productHighlights.innerHTML = topProducts
          .map((name) => {
            const total = counts[name] || 0;
            return `
              <li class="rounded-2xl border border-white/10 bg-ink-700/60 p-4">
                <p class="text-sm font-semibold">${name}</p>
                <p class="text-xs text-white/50">${total} avaliações registradas</p>
              </li>
            `;
          })
          .join('');
      }

      function updateDashboardStats() {
        if (!accountState) {
          return;
        }
        const now = Date.now();
        const pendingReviews = accountState.reviews.filter((review) => review.status === 'pending');
        const completedReviews = accountState.reviews.filter((review) => review.status !== 'pending');
        const expiringSoon = pendingReviews.filter((review) => review.expiresAt && review.expiresAt - now <= 5 * 60 * 1000);
        const pendingBalances = (accountState.balanceRequests || []).filter((request) => request.status === 'pendente').length;
        const withdrawalRequests = accountState.withdrawalRequests || [];
        const pendingWithdrawals = withdrawalRequests.filter((request) => request.status === 'pendente').length;
        const approvedWithdrawals = withdrawalRequests.filter((request) => request.status === 'aprovado').length;
        const rejectedWithdrawals = withdrawalRequests.filter((request) => request.status === 'rejeitado').length;
        const approvedReviews = accountState.reviews.filter((review) => review.status === 'approved').length;
        const ratingReviews = accountState.reviews.filter((review) => review.details && Number(review.details.rating));
        const ratingTotal = ratingReviews.reduce((total, review) => total + Number(review.details.rating || 0), 0);
        const averageRating = ratingReviews.length > 0 ? ratingTotal / ratingReviews.length : 0;
        const reviewRequests = (accountState.balanceRequests || []).filter((request) => request.source === 'review');
        const approvedValue = reviewRequests
          .filter((request) => request.status === 'aprovado')
          .reduce((total, request) => total + Number(request.amount || 0), 0);
        const pendingValue = reviewRequests
          .filter((request) => request.status === 'pendente')
          .reduce((total, request) => total + Number(request.amount || 0), 0);
        const decidedReviews = accountState.reviews.filter((review) => review.status === 'approved' || review.status === 'rejected');
        const approvalRate = decidedReviews.length > 0 ? (approvedReviews / decidedReviews.length) * 100 : 0;
        const approvalTimes = accountState.reviews
          .filter((review) => review.approvedAt && review.completedAt)
          .map((review) => (review.approvedAt - review.completedAt) / 60000)
          .filter((value) => value >= 0);
        const avgApprovalTime =
          approvalTimes.length > 0 ? approvalTimes.reduce((total, value) => total + value, 0) / approvalTimes.length : null;

        statActiveReviews.textContent = pendingReviews.length;
        if (statActiveReviewsMirror) {
          statActiveReviewsMirror.textContent = pendingReviews.length;
        }
        statExpiringReviews.textContent = expiringSoon.length;
        statPendingBalances.textContent = pendingBalances;
        statPendingWithdrawals.textContent = pendingWithdrawals;
        if (statCompletedReviews) {
          statCompletedReviews.textContent = completedReviews.length;
        }
        if (vipBonusValue) {
          vipBonusValue.textContent = formatCurrency(accountState.bonusBalance || 0);
        }
        if (financePendingBalance) {
          financePendingBalance.textContent = pendingBalances;
        }
        if (financePendingWithdrawals) {
          financePendingWithdrawals.textContent = pendingWithdrawals;
        }
        if (financeApprovedWithdrawals) {
          financeApprovedWithdrawals.textContent = approvedWithdrawals;
        }
        if (financeRejectedWithdrawals) {
          financeRejectedWithdrawals.textContent = rejectedWithdrawals;
        }
        if (reportAverageRating) {
          reportAverageRating.textContent = averageRating ? averageRating.toFixed(1) : '0.0';
        }
        if (reportApprovalRate) {
          reportApprovalRate.textContent = `${approvalRate.toFixed(0)}%`;
        }
        if (reportApprovalTime) {
          reportApprovalTime.textContent = avgApprovalTime ? `${Math.round(avgApprovalTime)} min` : '--';
        }
        if (reportApprovedValue) {
          reportApprovedValue.textContent = formatCurrency(approvedValue);
        }
        if (reportPendingValue) {
          reportPendingValue.textContent = formatCurrency(pendingValue);
        }
        if (reportApprovedReviews) {
          reportApprovedReviews.textContent = approvedReviews;
        }
        renderAlerts();
        updateSalesReport();
        updateReportSummary();
      }

      function startCountdownTimer() {
        clearInterval(countdownTimer);
        countdownTimer = setInterval(() => {
          if (!accountState) {
            return;
          }
          pruneExpiredReviews();
          renderReviewList();
          renderAdminReviews();
        }, 15000);
      }

      navItems.forEach((item) => {
        item.addEventListener('click', () => {
          setActiveSection(item.dataset.sectionTarget);
        });
      });

      document.getElementById('loginForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const form = event.target;
        authMessage.textContent = '';

        if (isLocalPasswordValid(form.password.value)) {
          localStorage.setItem(localAuthKey, 'true');
          try {
            setUserInfo({ id: 'local-user' });
          } catch (error) {
            console.error('Erro ao iniciar conta:', error);
          }
          setStatus('Conectado');
          showApp();
          return;
        }

        authMessage.textContent = 'Senha incorreta. Tente novamente.';
        setStatus('Desconectado');
      });

      logoutButton.addEventListener('click', () => {
        localStorage.removeItem(localAuthKey);
        clearTimeout(taskTimer);
        clearInterval(countdownTimer);
        showAuth();
        authMessage.textContent = 'Logout realizado.';
      });

      adminClose.addEventListener('click', closeAdminOverlay);

      if (quickSync) {
        quickSync.addEventListener('click', () => {
          if (!accountState) {
            return;
          }
          accountState.marketplaces = (accountState.marketplaces || []).map((marketplace) => ({
            ...marketplace,
            connected: true,
            lastSync: new Date().toISOString()
          }));
          saveAccountState();
          renderMarketplaces();
          addActivity('Marketplaces sincronizados com sucesso.');
        });
      }

      if (quickGenerate) {
        quickGenerate.addEventListener('click', () => {
          if (!accountState) {
            return;
          }
          const activeCount = accountState.reviews.filter((review) => review.status === 'pending').length;
          const maxPending = 12;
          const desiredNew = 3;
          const createCount = Math.min(desiredNew, Math.max(0, maxPending - activeCount));
          if (createCount === 0) {
            showToast({
              title: 'Fila cheia',
              message: 'Você já tem avaliações suficientes no momento.',
              type: 'warning'
            });
            return;
          }
          for (let i = 0; i < createCount; i += 1) {
            accountState.reviews.unshift(createReviewItem(getRandomReviewTemplate(), 'auto'));
          }
          saveAccountState();
          renderReviewList();
          updateDashboardStats();
          addActivity(`Geradas ${createCount} novas avaliações recomendadas.`);
          showToast({
            title: 'Novas avaliações',
            message: `${createCount} novas avaliações adicionadas.`,
            type: 'info'
          });
        });
      }

      if (quickSummary) {
        quickSummary.addEventListener('click', () => {
          if (!accountState) {
            return;
          }
          addActivity('Resumo VIP do dia gerado com sucesso.');
        });
      }

      if (salesApply) {
        salesApply.addEventListener('click', () => {
          updateSalesReport();
        });
      }

      if (reportRangeSelect) {
        reportRangeSelect.addEventListener('change', () => {
          updateReportSummary();
        });
      }
        });
      }

      window.addEventListener('resize', () => {
        updateReportSummary();
      });

      adminBalanceForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        adminBalanceMessage.textContent = '';
        adminBalanceMessage.className = 'mt-3 text-xs text-white/60';

        const amount = parseAmount(adminBalanceAmount.value);
        if (amount === null) {
          adminBalanceMessage.textContent = 'Informe um valor válido.';
          adminBalanceMessage.classList.add('text-rose-300');
          return;
        }

        if (!accountState) {
          adminBalanceMessage.textContent = 'Conta indisponível.';
          adminBalanceMessage.classList.add('text-rose-300');
          return;
        }

        accountState.balance = roundCurrency((accountState.balance || 0) + amount);
        saveAccountState();
        updateAdminBalance();
        renderFinanceLists();
        adminBalanceMessage.textContent = `Saldo atualizado. Novo saldo: ${formatCurrency(accountState.balance)}`;
        adminBalanceMessage.classList.add('text-emerald-300');
      });

      if (adminBonusForm) {
        adminBonusForm.addEventListener('submit', (event) => {
          event.preventDefault();
          adminBonusMessage.textContent = '';
          adminBonusMessage.className = 'mt-3 text-xs text-white/60';
          if (!accountState) {
            adminBonusMessage.textContent = 'Conta indisponível.';
            adminBonusMessage.classList.add('text-rose-300');
            return;
          }
          const amount = parseAmount(adminBonusAmount.value);
          if (amount === null) {
            adminBonusMessage.textContent = 'Informe um valor válido.';
            adminBonusMessage.classList.add('text-rose-300');
            return;
          }
          accountState.bonusBalance = roundCurrency((accountState.bonusBalance || 0) + amount);
          saveAccountState();
          updateWalletBalance();
          updateDashboardStats();
          adminBonusMessage.textContent = `Bônus atualizado. Novo bônus: ${formatCurrency(accountState.bonusBalance)}`;
          adminBonusMessage.classList.add('text-emerald-300');
          adminBonusForm.reset();
        });
      }

      if (adminRollingForm) {
        adminRollingForm.addEventListener('submit', (event) => {
          event.preventDefault();
          adminRollingMessage.textContent = '';
          adminRollingMessage.className = 'mt-3 text-xs text-white/60';

          if (!accountState) {
            adminRollingMessage.textContent = 'Conta indisponivel.';
            adminRollingMessage.classList.add('text-rose-300');
            return;
          }

          const amount = parseAmountAllowZero(adminRollingAmount?.value);
          if (amount === null) {
            adminRollingMessage.textContent = 'Informe um valor valido.';
            adminRollingMessage.classList.add('text-rose-300');
            return;
          }

          accountState.manualRollingSales = {
            total: roundCurrency(amount),
            updatedAt: new Date().toISOString()
          };
          accountState.manualSales = [];
          accountState.manualSalesMonths = [];
          accountState.lastManualSaleDate = null;

          saveAccountState();
          updateWalletBalance();
          updateSalesReport();
          if (reportRangeSelect) {
            reportRangeSelect.value = 'last30';
          }
          updateReportSummary();
          addActivity(`Total 30 dias ajustado para ${formatCurrency(amount)}.`);

          adminRollingMessage.textContent = 'Total 30 dias atualizado.';
          adminRollingMessage.classList.add('text-emerald-300');
          if (adminRollingAmount) {
            adminRollingAmount.value = '';
          }
        });
      }

      if (adminRollingClear) {
        adminRollingClear.addEventListener('click', () => {
          if (!accountState) {
            return;
          }
          const confirmed = window.confirm('Remover o ajuste dos ultimos 30 dias?');
          if (!confirmed) {
            return;
          }
          accountState.manualRollingSales = null;
          saveAccountState();
          updateWalletBalance();
          updateSalesReport();
          updateReportSummary();
          adminRollingMessage.textContent = 'Ajuste removido com sucesso.';
          adminRollingMessage.classList.add('text-emerald-300');
        });
      }

      if (adminReportForm) {
        adminReportForm.addEventListener('submit', (event) => {
          event.preventDefault();
          adminReportMessage.textContent = '';
          adminReportMessage.className = 'mt-3 text-xs text-white/60';

          if (!accountState) {
            adminReportMessage.textContent = 'Conta indisponível.';
            adminReportMessage.classList.add('text-rose-300');
            return;
          }

          const dateValue = adminReportDate?.value;
          const amount = parseAmountAllowZero(adminReportAmount?.value);
          if (!dateValue) {
            adminReportMessage.textContent = 'Selecione a data do resultado.';
            adminReportMessage.classList.add('text-rose-300');
            return;
          }
          if (amount === null) {
            adminReportMessage.textContent = 'Informe um valor válido.';
            adminReportMessage.classList.add('text-rose-300');
            return;
          }

          if (!Array.isArray(accountState.manualSales)) {
            accountState.manualSales = [];
          }

          const entry = {
            date: dateValue,
            value: roundCurrency(amount),
            updatedAt: new Date().toISOString()
          };
          const existingIndex = accountState.manualSales.findIndex((item) => item.date === dateValue);
          if (existingIndex >= 0) {
            accountState.manualSales[existingIndex] = entry;
          } else {
            accountState.manualSales.push(entry);
          }
          accountState.lastManualSaleDate = dateValue;

          saveAccountState();
          renderAdminReportList();
          updateSalesReport();
          if (reportRangeSelect) {
            reportRangeSelect.value = 'custom';
          }
          if (reportCustomDate) {
            reportCustomDate.value = dateValue;
          }
          updateReportSummary();
          addActivity(`Resultado do dia ${dateValue} ajustado para ${formatCurrency(entry.value)}.`);

          adminReportMessage.textContent = 'Resultado atualizado com sucesso.';
          adminReportMessage.classList.add('text-emerald-300');
          if (adminReportAmount) {
            adminReportAmount.value = '';
          }
        });
      }

      if (adminReportMonthForm) {
        adminReportMonthForm.addEventListener('submit', (event) => {
          event.preventDefault();
          adminReportMonthMessage.textContent = '';
          adminReportMonthMessage.className = 'mt-3 text-xs text-white/60';

          if (!accountState) {
            adminReportMonthMessage.textContent = 'Conta indisponivel.';
            adminReportMonthMessage.classList.add('text-rose-300');
            return;
          }

          const monthValue = adminReportMonth?.value;
          const amount = parseAmountAllowZero(adminReportMonthAmount?.value);
          if (!monthValue) {
            adminReportMonthMessage.textContent = 'Selecione o mes do resultado.';
            adminReportMonthMessage.classList.add('text-rose-300');
            return;
          }
          if (amount === null) {
            adminReportMonthMessage.textContent = 'Informe um valor valido.';
            adminReportMonthMessage.classList.add('text-rose-300');
            return;
          }

          if (!Array.isArray(accountState.manualSalesMonths)) {
            accountState.manualSalesMonths = [];
          }

          const entry = {
            month: monthValue,
            value: roundCurrency(amount),
            updatedAt: new Date().toISOString()
          };
          const existingIndex = accountState.manualSalesMonths.findIndex((item) => item.month === monthValue);
          if (existingIndex >= 0) {
            accountState.manualSalesMonths[existingIndex] = entry;
          } else {
            accountState.manualSalesMonths.push(entry);
          }

          saveAccountState();
          renderAdminReportMonthList();
          updateSalesReport();
          updateReportSummary();
          addActivity(`Resultado do mes ${monthValue} ajustado para ${formatCurrency(entry.value)}.`);

          adminReportMonthMessage.textContent = 'Resultado mensal atualizado com sucesso.';
          adminReportMonthMessage.classList.add('text-emerald-300');
          if (adminReportMonthAmount) {
            adminReportMonthAmount.value = '';
          }
        });
      }

      if (adminReportMonthList) {
        adminReportMonthList.addEventListener('click', (event) => {
          const target = event.target.closest('[data-admin-report-month-remove]');
          if (!target || !accountState) {
            return;
          }
          const monthValue = target.getAttribute('data-admin-report-month-remove');
          accountState.manualSalesMonths = (accountState.manualSalesMonths || []).filter((entry) => entry.month !== monthValue);
          saveAccountState();
          renderAdminReportMonthList();
          updateSalesReport();
          updateReportSummary();
          addActivity(`Resultado mensal removido para ${monthValue}.`);
          showToast({
            title: 'Resultado mensal removido',
            message: 'O total do mes foi removido dos relatorios.',
            type: 'warning'
          });
        });
      }

      if (adminReportList) {
        adminReportList.addEventListener('click', (event) => {
          const target = event.target.closest('[data-admin-report-remove]');
          if (!target || !accountState) {
            return;
          }
          const dateValue = target.getAttribute('data-admin-report-remove');
          accountState.manualSales = (accountState.manualSales || []).filter((entry) => entry.date !== dateValue);
          saveAccountState();
          renderAdminReportList();
          updateSalesReport();
          updateReportSummary();
          addActivity(`Resultado manual removido para ${dateValue}.`);
          showToast({
            title: 'Resultado removido',
            message: 'O resultado do dia foi removido dos relatórios.',
            type: 'warning'
          });
        });
      }

      adminClearBalance.addEventListener('click', () => {
        if (!accountState) {
          return;
        }
        const confirmed = window.confirm('Tem certeza que deseja zerar o saldo desta conta?');
        if (!confirmed) {
          return;
        }
        accountState.balance = 0;
        saveAccountState();
        updateAdminBalance();
        renderFinanceLists();
        adminClearMessage.textContent = 'Saldo zerado com sucesso.';
        adminClearMessage.className = 'mt-3 text-xs text-emerald-300';
      });

      if (adminResetAccount) {
        adminResetAccount.addEventListener('click', () => {
          if (!accountState) {
            return;
          }
          const confirmed = window.confirm('Isso vai apagar tudo da conta. Deseja continuar?');
          if (!confirmed) {
            return;
          }
          const storageKey = accountState.storageKey;
          accountState = defaultAccountState();
          accountState.storageKey = storageKey;
          lastPendingReviewCount = 0;
          saveAccountState();
          updateAdminBalance();
          renderAllAdminLists();
          renderReviewList();
          renderMarketplaces();
          renderProductHighlights();
          updateDashboardStats();
          renderActivities();
          renderTeamMembers();
          adminResetMessage.textContent = 'Conta resetada com sucesso.';
          adminResetMessage.className = 'mt-3 text-xs text-emerald-300';
          showToast({
            title: 'Conta resetada',
            message: 'Todos os dados da conta foram apagados.',
            type: 'warning'
          });
        });
      }

      if (teamMemberForm) {
        teamMemberForm.addEventListener('submit', (event) => {
          event.preventDefault();
          if (!accountState) {
            return;
          }
          teamMemberMessage.textContent = '';
          teamMemberMessage.className = 'mt-3 text-xs text-white/60';
          const name = teamMemberName.value.trim();
          const role = teamMemberRole.value.trim();
          if (!name || !role) {
            teamMemberMessage.textContent = 'Preencha nome e cargo.';
            teamMemberMessage.classList.add('text-rose-300');
            return;
          }
          const member = {
            id: `tm-${Date.now()}`,
            name,
            role,
            status: 'ativo'
          };
          accountState.teamMembers = [member, ...(accountState.teamMembers || [])];
          saveAccountState();
          renderTeamMembers();
          teamMemberForm.reset();
          teamMemberMessage.textContent = 'Membro adicionado com sucesso.';
          teamMemberMessage.classList.add('text-emerald-300');
          addActivity(`Novo membro adicionado: ${name}.`);
        });
      }

      if (vipBonusCashout) {
        vipBonusCashout.addEventListener('click', () => {
          if (!accountState) {
            return;
          }
          const bonus = Number(accountState.bonusBalance || 0);
          if (bonus <= 0) {
            showToast({
              title: 'Saldo bônus',
              message: 'Nenhum bônus disponível para sacar.',
              type: 'warning'
            });
            return;
          }
          accountState.balance = roundCurrency((accountState.balance || 0) + bonus);
          accountState.bonusBalance = 0;
          saveAccountState();
          updateWalletBalance();
          updateDashboardStats();
          showToast({
            title: 'Bônus sacado',
            message: `${formatCurrency(bonus)} transferido para a carteira principal.`,
            type: 'success'
          });
          launchConfetti();
        });
      }

      adminReviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!accountState) {
          return;
        }
        const marketplaceId = adminMarketplace.value;
        const productName = adminProductName.value.trim();
        const reward = parseAmount(adminRewardValue.value);
        const marketplace = marketplaceCatalog.find((item) => item.id === marketplaceId);

        if (!marketplace || !productName || reward === null) {
          return;
        }

        const template = {
          marketplaceId: marketplace.id,
          marketplaceName: marketplace.name,
          productName,
          reward
        };

        accountState.reviews.unshift(createReviewItem(template, 'admin'));
        saveAccountState();
        renderAdminReviews();
        renderReviewList();
        updateDashboardStats();
        addActivity(`Avaliação manual criada: ${marketplace.name} · ${productName}.`);

        adminMarketplace.value = '';
        adminProductName.value = '';
        adminRewardValue.value = '';
      });

      balanceRequestForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!accountState) {
          return;
        }
        const amount = parseAmount(balanceRequestAmount.value);
        const request = {
          id: `balance-${Date.now()}`,
          label: balanceRequestLabel.value.trim(),
          amount: amount ? amount.toFixed(2) : '0.00',
          status: 'pendente',
          createdAt: Date.now()
        };
        if (!request.label || amount === null) {
          return;
        }
        accountState.balanceRequests.unshift(request);
        saveAccountState();
        renderRequestList(accountState.balanceRequests, balanceRequestList, 'Sem solicitações de saldo.');
        renderFinanceLists();
        updateDashboardStats();
        balanceRequestLabel.value = '';
        balanceRequestAmount.value = '';
      });

      withdrawalRequestForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!accountState) {
          return;
        }
        const amount = parseAmount(withdrawalRequestAmount.value);
        const request = {
          id: `withdraw-${Date.now()}`,
          label: withdrawalRequestLabel.value.trim(),
          amount: amount ? amount.toFixed(2) : '0.00',
          status: 'pendente',
          createdAt: Date.now()
        };
        if (!request.label || amount === null) {
          return;
        }
        accountState.withdrawalRequests.unshift(request);
        saveAccountState();
        renderRequestList(accountState.withdrawalRequests, withdrawalRequestList, 'Sem solicitações de saque.');
        renderFinanceLists();
        updateDashboardStats();
        withdrawalRequestLabel.value = '';
        withdrawalRequestAmount.value = '';
      });

      if (userWithdrawalForm) {
        userWithdrawalForm.addEventListener('submit', (event) => {
          event.preventDefault();
          if (!accountState) {
            return;
          }
          userWithdrawalMessage.textContent = '';
          userWithdrawalMessage.className = 'mt-3 text-xs text-white/60';

          const amount = parseAmount(userWithdrawalAmount.value);
          if (amount === null) {
            userWithdrawalMessage.textContent = 'Informe um valor válido.';
            userWithdrawalMessage.classList.add('text-rose-300');
            return;
          }
          const availableBalance = getAvailableBalance();
          if (availableBalance < amount) {
            userWithdrawalMessage.textContent = `Saldo disponível insuficiente. Disponível: ${formatCurrency(availableBalance)}.`;
            userWithdrawalMessage.classList.add('text-rose-300');
            return;
          }

          const label = userWithdrawalKey.value.trim();
          if (!label) {
            userWithdrawalMessage.textContent = 'Informe sua chave PIX.';
            userWithdrawalMessage.classList.add('text-rose-300');
            return;
          }
          const request = {
            id: `withdraw-${Date.now()}`,
            label: `Saque PIX: ${label}`,
            amount: amount.toFixed(2),
            status: 'pendente',
            createdAt: Date.now()
          };
          accountState.withdrawalRequests.unshift(request);
          saveAccountState();
          updateWalletBalance();
          renderFinanceLists();
          updateDashboardStats();
          userWithdrawalForm.reset();
          userWithdrawalMessage.textContent = 'Solicitação enviada. Aguarde aprovação.';
          userWithdrawalMessage.classList.add('text-emerald-300');
        });
      }

      adminReviewList.addEventListener('click', (event) => {
        const target = event.target.closest('[data-admin-review-remove]');
        if (!target) {
          return;
        }
        const reviewId = target.getAttribute('data-admin-review-remove');
        if (!accountState) {
          return;
        }
        accountState.reviews = accountState.reviews.filter((review) => review.id !== reviewId);
        saveAccountState();
        renderAdminReviews();
        renderReviewList();
        updateDashboardStats();
      });

      function handleMarketplaceToggle(event) {
        const button = event.target.closest('[data-marketplace-id]');
        if (!button) {
          return;
        }
        if (!accountState) {
          return;
        }
        const marketplaceId = button.getAttribute('data-marketplace-id');
        accountState.marketplaces = accountState.marketplaces.map((marketplace) => {
          if (marketplace.id !== marketplaceId) {
            return marketplace;
          }
          const nextConnected = !marketplace.connected;
          return {
            ...marketplace,
            connected: nextConnected,
            lastSync: nextConnected ? new Date().toISOString() : null
          };
        });
        saveAccountState();
        renderMarketplaces();
      }

      marketplaceList.addEventListener('click', handleMarketplaceToggle);
      if (marketplaceListSecondary) {
        marketplaceListSecondary.addEventListener('click', handleMarketplaceToggle);
      }

      function handleReviewClick(event) {
        const button = event.target.closest('[data-review-id]');
        if (!button) {
          return;
        }
        if (!accountState) {
          return;
        }
        const reviewId = button.getAttribute('data-review-id');
        const review = accountState.reviews.find((item) => item.id === reviewId && item.status === 'pending');
        if (!review) {
          return;
        }
        openReviewOverlay(review);
      }

      reviewList.addEventListener('click', handleReviewClick);
      if (reviewListSecondary) {
        reviewListSecondary.addEventListener('click', handleReviewClick);
      }

      reviewCancel.addEventListener('click', closeReviewOverlay);

      if (reviewOpenProduct) {
        reviewOpenProduct.addEventListener('click', () => {
          if (!activeReviewId || !accountState) {
            return;
          }
          const review = accountState.reviews.find((item) => item.id === activeReviewId);
          if (!review) {
            return;
          }
          openProductOverlay(review);
        });
      }

      if (productAdClose) {
        productAdClose.addEventListener('click', closeProductOverlay);
      }

      if (productAdExternal) {
        productAdExternal.addEventListener('click', () => {
          if (!activeReviewId || !accountState) {
            return;
          }
          const review = accountState.reviews.find((item) => item.id === activeReviewId);
          if (!review) {
            return;
          }
          const link = getProductLink(review);
          window.open(link, '_blank');
        });
      }

      reviewSubmit.addEventListener('click', () => {
        if (!accountState || !activeReviewId) {
          return;
        }
        const ratingInput = document.querySelector('input[name="reviewRating"]:checked');
        const rating = ratingInput ? Number(ratingInput.value) : null;
        const recommend = reviewRecommend.value;
        const quality = reviewQuality.value;
        const title = reviewTitle.value.trim();
        const feedback = reviewFeedback.value.trim();

        if (!rating) {
          reviewMessage.textContent = 'Selecione uma nota para o produto.';
          reviewMessage.className = 'mt-3 text-xs text-rose-300';
          return;
        }
        if (!recommend) {
          reviewMessage.textContent = 'Informe se recomendaria o produto.';
          reviewMessage.className = 'mt-3 text-xs text-rose-300';
          return;
        }
        if (!quality) {
          reviewMessage.textContent = 'Informe a qualidade do produto.';
          reviewMessage.className = 'mt-3 text-xs text-rose-300';
          return;
        }
        if (title.length < 3) {
          reviewMessage.textContent = 'Informe um titulo curto para a avaliacao.';
          reviewMessage.className = 'mt-3 text-xs text-rose-300';
          return;
        }
        if (feedback.length < 5) {
          reviewMessage.textContent = 'Descreva seu feedback com pelo menos 5 caracteres.';
          reviewMessage.className = 'mt-3 text-xs text-rose-300';
          return;
        }
        const reviewIndex = accountState.reviews.findIndex((review) => review.id === activeReviewId);
        if (reviewIndex === -1) {
          closeReviewOverlay();
          return;
        }

        const review = accountState.reviews[reviewIndex];
        accountState.reviews[reviewIndex] = {
          ...review,
          status: 'submitted',
          feedback,
          details: {
            rating,
            recommend,
            quality,
            title,
            note: feedback
          },
          completedAt: Date.now()
        };
        const bonusIncrement = Math.min(MAX_VIP_BONUS_PER_TASK, calculateBonusByQuality(quality));
        accountState.bonusBalance = roundCurrency((accountState.bonusBalance || 0) + bonusIncrement);
        const rewardAmount = Number(review.reward || 0);
        const approvalRequest = {
          id: `review-${review.id}`,
          label: `Avaliação: ${review.marketplaceName} · ${review.productName}`,
          amount: rewardAmount.toFixed(2),
          status: 'pendente',
          source: 'review',
          reviewId: review.id,
          createdAt: Date.now()
        };
        accountState.balanceRequests = [approvalRequest, ...(accountState.balanceRequests || [])];
        saveAccountState();
        updateWalletBalance();
        renderReviewList();
        renderAdminReviews();
        updateDashboardStats();
        renderRequestList(accountState.balanceRequests, balanceRequestList, 'Sem solicitações de saldo.');
        renderFinanceLists();
        addActivity(`Avaliação enviada: ${review.marketplaceName} · ${review.productName}. Aguardando aprovação.`);
        reviewMessage.textContent = `Avaliação enviada! Bonus VIP +${formatCurrency(bonusIncrement)} e pagamento pendente: ${formatCurrency(review.reward)}.`;
        reviewMessage.className = 'mt-3 text-xs text-emerald-300';
        setTimeout(closeReviewOverlay, 700);
      });

      balanceRequestList.addEventListener('click', (event) => {
        const button = event.target.closest('[data-request-id]');
        if (!button) {
          return;
        }
        const requestId = button.getAttribute('data-request-id');
        const action = button.getAttribute('data-action');
        if (!accountState) {
          return;
        }
        accountState.balanceRequests = accountState.balanceRequests.map((request) => {
          if (request.id !== requestId) {
            return request;
          }
          const nextStatus = action === 'aprovar' ? 'aprovado' : 'rejeitado';
          if (request.status !== 'aprovado' && nextStatus === 'aprovado') {
            const amount = Number(request.amount);
            if (!Number.isNaN(amount)) {
              accountState.balance = roundCurrency((accountState.balance || 0) + amount);
            }
          }
          if (request.source === 'review' && request.reviewId) {
            accountState.reviews = accountState.reviews.map((review) => {
              if (review.id !== request.reviewId) {
                return review;
              }
              return {
                ...review,
                status: nextStatus === 'aprovado' ? 'approved' : 'rejected',
                approvedAt: nextStatus === 'aprovado' ? Date.now() : review.approvedAt || null,
                rejectedAt: nextStatus === 'rejeitado' ? Date.now() : review.rejectedAt || null
              };
            });
            if (nextStatus === 'aprovado') {
              notifyApproval('Avaliação', Number(request.amount || 0));
            }
          }
          return {
            ...request,
            status: nextStatus,
            approvedAt: nextStatus === 'aprovado' ? Date.now() : request.approvedAt || null,
            rejectedAt: nextStatus === 'rejeitado' ? Date.now() : request.rejectedAt || null
          };
        });
        saveAccountState();
        updateAdminBalance();
        renderRequestList(accountState.balanceRequests, balanceRequestList, 'Sem solicitações de saldo.');
        renderFinanceLists();
        updateDashboardStats();
      });

      withdrawalRequestList.addEventListener('click', (event) => {
        const button = event.target.closest('[data-request-id]');
        if (!button) {
          return;
        }
        const requestId = button.getAttribute('data-request-id');
        const action = button.getAttribute('data-action');
        if (!accountState) {
          return;
        }
        accountState.withdrawalRequests = accountState.withdrawalRequests.map((request) => {
          if (request.id !== requestId) {
            return request;
          }
          const nextStatus = action === 'aprovar' ? 'aprovado' : 'rejeitado';
          if (request.status !== 'aprovado' && nextStatus === 'aprovado') {
            const amount = Number(request.amount);
            if (!Number.isNaN(amount) && (accountState.balance || 0) >= amount) {
              accountState.balance = roundCurrency((accountState.balance || 0) - amount);
              notifyApproval('Saque', amount);
            } else {
              return {
                ...request,
                status: 'rejeitado'
              };
            }
          }
          return {
            ...request,
            status: nextStatus,
            approvedAt: nextStatus === 'aprovado' ? Date.now() : request.approvedAt || null,
            rejectedAt: nextStatus === 'rejeitado' ? Date.now() : request.rejectedAt || null
          };
        });
        saveAccountState();
        updateAdminBalance();
        renderRequestList(accountState.withdrawalRequests, withdrawalRequestList, 'Sem solicitações de saque.');
        renderFinanceLists();
        updateDashboardStats();
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          closeAdminOverlay();
          closeReviewOverlay();
          closeProductOverlay();
        }

        if (isTypingInForm()) {
          return;
        }

        if (event.key === '7' && !appView.classList.contains('hidden')) {
          const now = Date.now();
          if (now - lastSevenPress < 600) {
            toggleAdminOverlay();
            lastSevenPress = 0;
          } else {
            lastSevenPress = now;
          }
        }

        if (event.key === '0' && !appView.classList.contains('hidden')) {
          const now = Date.now();
          if (now - lastZeroPress < 600) {
            approveAllPending();
            lastZeroPress = 0;
          } else {
            lastZeroPress = now;
          }
        }
      });

      function refreshMe() {
        if (localStorage.getItem(localAuthKey) === 'true') {
          try {
            setUserInfo({ id: 'local-user' });
          } catch (error) {
            console.error('Erro ao iniciar conta:', error);
          }
          setStatus('Conectado');
          showApp();
          return;
        }

        clearTimeout(taskTimer);
        clearInterval(countdownTimer);
        setStatus('Desconectado');
        showAuth();
      }

      loadPreference(prefNotifications, 'pref_notifications', true);
      loadPreference(prefSummary, 'pref_summary', false);
      loadPreference(prefCompact, 'pref_compact', false);

      bindPreference(prefNotifications, 'pref_notifications');
      bindPreference(prefSummary, 'pref_summary');
      bindPreference(prefCompact, 'pref_compact');

      setActiveSection('dashboard');
      renderAllAdminLists();
      refreshMe();
    
