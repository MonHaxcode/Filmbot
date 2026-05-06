import { logger } from '../utils/logger.js';


export const botConfig = {
  // =========================
  // BOT PRESENCE (what users see under the bot name)
  // =========================
  // `status` options:
  // - "online"    = green dot
  // - "idle"      = yellow moon
  // - "dnd"       = red do-not-disturb
  // - "invisible" = appears offline
  presence: {
    // Current online state shown on Discord.
    status: "online",

    // Activity lines shown under the bot name.
    // `type` number mapping from Discord:
    // 0 = Playing
    // 1 = Streaming
    // 2 = Listening
    // 3 = Watching
    // 4 = Custom
    // 5 = Competing
    activities: [
      {
        // Text users will see (example: "Playing /help | Titan Bot").
        name: "Made with ❤️",
        // Activity type number (0 = Playing).
        type: 0, 
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    // Bot owner user IDs (comma-separated in OWNER_IDS env var).
    // Owners can access owner/admin-level bot commands.
    owners: process.env.OWNER_IDS?.split(",") || [],

    // Default wait time between command uses (in seconds).
    defaultCooldown: 3, 

    // If true, old commands are removed before re-registering.
    deleteCommands: false,

    // Optional server ID used for testing slash commands quickly.
    testGuildId: process.env.TEST_GUILD_ID,
  },

  // =========================
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    // Default questions shown when someone fills out an application.
    defaultQuestions: [
      { question: "What is your name?", required: true },
      { question: "How old are you?", required: true },
      { question: "Why do you want to join?", required: true },
    ],

    // Embed colors by application status.
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },

    // How long users must wait before submitting another application (hours).
    applicationCooldown: 24, 

    // Auto-delete denied applications after this many days.
    deleteDeniedAfter: 7, 

    // Auto-delete approved applications after this many days.
    deleteApprovedAfter: 30, 

    // Role IDs allowed to manage applications.
    managerRoles: [], // Will be populated from environment or database
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  // IMPORTANT: This is the SINGLE SOURCE OF TRUTH for all bot colors
  embeds: {
    colors: {
      // Main brand colors.
      primary: "#336699", 
      secondary: "#2F3136", 

      // Standard status colors for success/error/warning/info messages.
      success: "#57F287", 
      error: "#ED4245", 
      warning: "#FEE75C", 
      info: "#3498DB", 

      // Neutral utility colors.
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",

      // Discord-style palette shortcuts.
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",

      // Feature-specific colors.
      giveaway: {
        active: "#57F287",
        ended: "#ED4245",
      },
      ticket: {
        open: "#57F287",
        claimed: "#FAA61A",
        closed: "#ED4245",
        pending: "#99AAB5",
      },
      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",

      // Ticket priority color mapping.
      priority: {
        none: "#95A5A6",
        low: "#3498db",
        medium: "#2ecc71",
        high: "#f1c40f",
        urgent: "#e74c3c",
      },
    },
    footer: {
      // Default footer text used in bot embeds.
      text: "Titan Bot",
      // Footer icon URL (null = no icon).
      icon: null,
    },
    // Default thumbnail URL for embeds (null = no thumbnail).
    thumbnail: null,
    author: {
      // Optional default embed author block.
      name: null,
      icon: null,
      url: null,
    },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: {
      // Currency display name.
      name: "coins",
      // Plural display name.
      namePlural: "coins",
      // Currency symbol shown in balances.
      symbol: "$",
    },

    // Starting balance for new users.
    startingBalance: 0,

    // Maximum bank amount before upgrades (if upgrades are used).
    baseBankCapacity: 100000,

    // Daily reward amount.
    dailyAmount: 100,

    // Work command random payout range.
    workMin: 10,
    workMax: 100,

    // Beg command random payout range.
    begMin: 5,
    begMax: 50,

    // Chance to succeed when robbing (0.4 = 40%).
    robSuccessRate: 0.4,

    // Jail time after failed rob (milliseconds).
    // 3600000 = 1 hour.
    robFailJailTime: 3600000, 
  },

  // =========================
  // SHOP SETTINGS
  // =========================
  // Add shop defaults here when needed.
  shop: {
    
  },

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    // Category ID where new tickets are created (null = no forced category).
    defaultCategory: null,

    // Role IDs allowed to manage/support tickets.
    supportRoles: [],

    // Priority options users/staff can assign.
    priorities: {
      none: {
        emoji: "⚪",
        color: "#95A5A6",
        label: "None",
      },
      low: {
        emoji: "🟢",
        color: "#2ECC71",
        label: "Low",
      },
      medium: {
        emoji: "🟡",
        color: "#F1C40F",
        label: "Medium",
      },
      high: {
        emoji: "🔴",
        color: "#E74C3C",
        label: "High",
      },
      urgent: {
        emoji: "🚨",
        color: "#E91E63",
        label: "Urgent",
      },
    },

    // Default priority for new tickets.
    defaultPriority: "none",

    // Category ID where closed tickets are archived.
    archiveCategory: null,

    // Channel ID where ticket logs are sent.
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    // Default giveaway duration in milliseconds.
    // 86400000 = 24 hours.
    defaultDuration: 86400000, 

    // Allowed winner count range.
    minimumWinners: 1,
    maximumWinners: 10,

    // Allowed giveaway duration range in milliseconds.
    // 300000 = 5 minutes.
    minimumDuration: 300000, 
    // 2592000000 = 30 days.
    maximumDuration: 2592000000, 

    // Role IDs allowed to host giveaways.
    allowedRoles: [],

    // Role IDs that bypass giveaway restrictions.
    bypassRoles: [],
  },

  // =========================
  // BIRTHDAY SETTINGS
  // =========================
  birthday: {
    // Role ID given to users on their birthday.
    defaultRole: null,

    // Channel ID where birthday announcements are posted.
    announcementChannel: null,

    // Timezone used to calculate birthday dates.
    timezone: "UTC",
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    // Message shown when posting the verification panel.
    defaultMessage: "Click the button below to verify yourself and gain access to the server!",

    // Text on the verification button.
    defaultButtonText: "Verify",

    // Automatic verification behavior.
    autoVerify: {
      // How automatic verification decides who is auto-approved:
      // - "none"        = everyone is auto-verified immediately
      // - "account_age" = account must be older than set days
      // - "server_size" = auto-verify everyone only in smaller servers
      defaultCriteria: "none",

      // Days used when `defaultCriteria` is `account_age`.
      defaultAccountAgeDays: 7,

      // Member count threshold used when `defaultCriteria` is `server_size`.
      // Example: 1000 means auto-verify if server has fewer than 1000 members.
      serverSizeThreshold: 1000,

      // Allowed safety limits for account-age requirements.
      // 1 = minimum day, 365 = maximum days.
      minAccountAge: 1,      
      maxAccountAge: 365,    

      // If true, user receives a DM after verification.
      sendDMNotification: true,

      // Human-readable descriptions for each criteria mode.
      criteria: {
        account_age: "Account must be older than specified days",
        server_size: "All users if server has less than 1000 members",
        none: "All users immediately"
      }
    },

    // Minimum time between verification attempts (milliseconds).
    // 5000 = 5 seconds.
    verificationCooldown: 5000,  

    // Maximum failed attempts allowed inside the time window below.
    maxVerificationAttempts: 3,   

    // Time window for counting attempts (milliseconds).
    // 60000 = 1 minute.
    attemptWindow: 60000,          

    // In-memory safety limits (helps avoid unbounded memory growth).
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    // Cleanup frequency for cooldown/attempt maps (milliseconds).
    // 300000 = 5 minutes.
    cooldownCleanupInterval: 300000, 
    // Maximum metadata payload size for audit entries (bytes).
    maxAuditMetadataBytes: 4096,
    // Maximum number of audit entries kept in memory.
    maxInMemoryAuditEntries: 1000,
  // If true, log every verification action.
  logAllVerifications: true,
  // If true, preserve verification audit history.
  keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES
  // =========================
  welcome: {
    // Welcome template posted when a user joins.
    // Placeholders: {user}, {server}, {memberCount}
    defaultWelcomeMessage:
      "Welcome {user} to {server}! We now have {memberCount} members!",
    // Goodbye template posted when a user leaves.
    // Placeholders: {user}, {memberCount}
    defaultGoodbyeMessage:
      "{user} has left the server. We now have {memberCount} members.",
    // Channel ID for welcome messages.
    defaultWelcomeChannel: null,
    // Channel ID for goodbye messages.
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: {
      // Default naming/description templates for counter entries.
      name: "{name} Counter",
      description: "Server {name} counter",
      // Channel type used for counters (typically "voice").
      type: "voice",
      // Channel name format. `{count}` is replaced automatically.
      channelName: "{name}-{count}",
    },
    permissions: {
      // Default denied permissions for the counter channel.
      deny: ["VIEW_CHANNEL"],
      // Default allowed permissions for the counter channel.
      allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"],
    },
    messages: {
      // Default response messages for counter actions.
      created: "✅ Created counter **{name}**",
      deleted: "🗑️ Deleted counter **{name}**",
      updated: "🔄 Updated counter **{name}**",
    },
    types: {
      // Built-in counter types and how each count is calculated.
      members: {
        name: "👥 Members",
        description: "Total members in the server",
        getCount: (guild) => guild.memberCount.toString(),
      },
      bots: {
        name: "🤖 Bots",
        description: "Total bot accounts in the server",
        getCount: (guild) =>
          guild.members.cache.filter((m) => m.user.bot).size.toString(),
      },
      members_only: {
        name: "👤 Humans",
        description: "Total human members (non-bots)",
        getCount: (guild) =>
          guild.members.cache.filter((m) => !m.user.bot).size.toString(),
      },
    },
  },

  // =========================
  // GENERIC BOT MESSAGES
  // =========================
  messages: {
    noPermission: "You do not have permission to use this command.",
    cooldownActive: "Please wait {time} before using this command again.",
    errorOccurred: "An error occurred while executing this command.",
    missingPermissions:
      "I am missing required permissions to perform this action.",
    commandDisabled: "This command has been disabled.",
    maintenanceMode: "The bot is currently in maintenance mode.",
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  // Set any feature to `false` to disable it globally.
  features: {
    // Core systems.
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,

    // Community engagement systems.
    tickets: true,
    giveaways: true,
    birthday: true,
    counter: true,

    // Security and self-service systems.
    verification: true,
    reactionRoles: true,
    joinToCreate: true,

    // Utility/quality-of-life modules.
    voice: true,
    search: true,
    tools: true,
    utility: true,
    community: true,
    fun: true,
  },
};


export function validateConfig(config) {
  const errors = [];

  
  if (process.env.NODE_ENV !== 'production') {
    logger.debug('Environment variables check:');
    logger.debug('DISCORD_TOKEN exists:', !!process.env.DISCORD_TOKEN);
    logger.debug('TOKEN exists:', !!process.env.TOKEN);
    logger.debug('CLIENT_ID exists:', !!process.env.CLIENT_ID);
    logger.debug('GUILD_ID exists:', !!process.env.GUILD_ID);
    logger.debug('POSTGRES_HOST exists:', !!process.env.POSTGRES_HOST);
    logger.debug('NODE_ENV:', process.env.NODE_ENV);
  }

  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required (DISCORD_TOKEN or TOKEN environment variable)");
  }

  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required (CLIENT_ID environment variable)");
  }

  
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.POSTGRES_HOST) {
      errors.push("PostgreSQL host is required in production (POSTGRES_HOST environment variable)");
    }
    if (!process.env.POSTGRES_USER) {
      errors.push("PostgreSQL user is required in production (POSTGRES_USER environment variable)");
    }
    if (!process.env.POSTGRES_PASSWORD) {
      errors.push("PostgreSQL password is required in production (POSTGRES_PASSWORD environment variable)");
    }
  }

  return errors;
}


const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Bot configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}


export const BotConfig = botConfig;

export function getColor(path, fallback = "#99AAB5") {
  
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) {
    
    return parseInt(path.replace("#", ""), 16);
  }
  const result = path
    .split(".")
    .reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback),
      botConfig.embeds.colors,
    );
  
  // Convert the result to integer if it's a hex string
  if (typeof result === "string" && result.startsWith("#")) {
    return parseInt(result.replace("#", ""), 16);
  }
  return result;
}

export function getRandomColor() {
  const colors = Object.values(botConfig.embeds.colors).flatMap((color) =>
    typeof color === "string" ? color : Object.values(color),
  );
  return colors[Math.floor(Math.random() * colors.length)];
}

export default botConfig;
import discord
from discord.ext import commands
from discord import app_commands
import os
from dotenv import load_dotenv
import yt_dlp
import asyncio
from datetime import datetime

# Load environment variables
load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

# Bot setup
intents = discord.Intents.default()
intents.message_content = True
intents.voice_states = True
bot = commands.Bot(command_prefix='/', intents=intents)

# Global variables for streaming
streaming_sessions = {}
user_credentials = {}

class FilmBot(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.ydl_opts = {
            'format': 'best',
            'noplaylist': True,
            'quiet': False,
            'no_warnings': False,
        }

    @bot.event
    async def on_ready():
        print(f'✅ Bot ist online: {bot.user}')
        try:
            synced = await bot.tree.sync()
            print(f'✅ {len(synced)} Slash Commands synchronisiert')
        except Exception as e:
            print(f'❌ Fehler beim Synchronisieren: {e}')

    @bot.tree.command(name="film", description="Film Bot Befehle")
    @app_commands.describe(
        aktion="Wähle eine Aktion: join, anmelden, play, stop",
        url="URL des Videos (für play Befehl)",
        service="Streaming-Dienst: youtube, twitch"
    )
    async def film(interaction: discord.Interaction, aktion: str, url: str = None, service: str = None):
        """Hauptbefehl für den Film Bot"""
        
        if aktion.lower() == "join":
            await film_join(interaction)
        elif aktion.lower() == "anmelden":
            await film_anmelden(interaction, service)
        elif aktion.lower() == "play":
            await film_play(interaction, url)
        elif aktion.lower() == "stop":
            await film_stop(interaction)
        else:
            await interaction.response.send_message(
                "❌ Unbekannte Aktion! Verwende: `join`, `anmelden`, `play` oder `stop`",
                ephemeral=True
            )

async def film_join(interaction: discord.Interaction):
    """Bot tritt dem Voice Channel bei"""
    try:
        if not interaction.user.voice:
            await interaction.response.send_message(
                "❌ Du musst in einem Voice Channel sein!",
                ephemeral=True
            )
            return
        
        channel = interaction.user.voice.channel
        guild_id = interaction.guild.id
        
        # Bot zum Voice Channel hinzufügen
        voice_client = await channel.connect()
        streaming_sessions[guild_id] = {
            'voice_client': voice_client,
            'channel': channel,
            'owner': interaction.user.id,
            'authenticated': False,
            'service': None
        }
        
        await interaction.response.send_message(
            f"✅ Bot ist dem Voice Channel `{channel.name}` beigetreten!\n"
            f"Nutze `/film anmelden` um dich authentifizieren zu können."
        )
        print(f"[{datetime.now()}] Bot joined channel: {channel.name} in guild {guild_id}")
        
    except Exception as e:
        await interaction.response.send_message(
            f"❌ Fehler beim Beitreten: {str(e)}",
            ephemeral=True
        )
        print(f"Fehler in film_join: {e}")

async def film_anmelden(interaction: discord.Interaction, service: str):
    """Benutzer authentifiziert sich bei einem Streaming-Dienst"""
    try:
        guild_id = interaction.guild.id
        user_id = interaction.user.id
        
        if guild_id not in streaming_sessions:
            await interaction.response.send_message(
                "❌ Bot ist nicht im Voice Channel! Nutze zuerst `/film join`",
                ephemeral=True
            )
            return
        
        session = streaming_sessions[guild_id]
        
        if session['owner'] != user_id:
            await interaction.response.send_message(
                "❌ Nur der Benutzer, der den Bot eingeladen hat, kann sich anmelden!",
                ephemeral=True
            )
            return
        
        if service and service.lower() in ['youtube', 'twitch']:
            streaming_sessions[guild_id]['authenticated'] = True
            streaming_sessions[guild_id]['service'] = service.lower()
            
            await interaction.response.send_message(
                f"✅ Du hast dich erfolgreich bei **{service.upper()}** angemeldet!\n"
                f"Nutze jetzt `/film play <URL>` um einen Stream zu starten.",
                ephemeral=False
            )
            print(f"[{datetime.now()}] User {interaction.user} authenticated with {service}")
        else:
            await interaction.response.send_message(
                "❌ Bitte gib einen gültigen Dienst an: `youtube` oder `twitch`",
                ephemeral=True
            )
            
    except Exception as e:
        await interaction.response.send_message(
            f"❌ Fehler bei der Anmeldung: {str(e)}",
            ephemeral=True
        )
        print(f"Fehler in film_anmelden: {e}")

async def film_play(interaction: discord.Interaction, url: str):
    """Startet den Stream"""
    try:
        await interaction.response.defer()
        
        guild_id = interaction.guild.id
        user_id = interaction.user.id
        
        if guild_id not in streaming_sessions:
            await interaction.followup.send(
                "❌ Bot ist nicht im Voice Channel! Nutze zuerst `/film join`"
            )
            return
        
        session = streaming_sessions[guild_id]
        
        if session['owner'] != user_id:
            await interaction.followup.send(
                "❌ Nur der Benutzer, der den Bot eingeladen hat, kann Streams starten!"
            )
            return
        
        if not session['authenticated']:
            await interaction.followup.send(
                "❌ Du musst dich zuerst anmelden! Nutze `/film anmelden <service>`"
            )
            return
        
        if not url:
            await interaction.followup.send(
                "❌ Bitte gib die URL des Videos ein!"
            )
            return
        
        # Video-Informationen abrufen
        await interaction.followup.send(
            f"⏳ Lade Video... Dies kann eine Weile dauern."
        )
        
        try:
            with yt_dlp.YoutubeDL(cog.ydl_opts) as ydl:
                info = ydl.extract_info(url, download=False)
                title = info.get('title', 'Unbekannter Titel')
                duration = info.get('duration', 0)
                
                # Umrechnung der Dauer in Minuten
                duration_minutes = duration // 60 if duration else 0
                
                await interaction.followup.send(
                    f"▶️ **Stream gestartet!**\n"
                    f"🎬 Titel: **{title}**\n"
                    f"⏱️ Dauer: **{duration_minutes} Minuten**\n"
                    f"👥 Alle im Voice Channel können den Stream sehen!"
                )
                
                streaming_sessions[guild_id]['current_stream'] = {
                    'title': title,
                    'url': url,
                    'started_at': datetime.now()
                }
                
                print(f"[{datetime.now()}] Stream started: {title}")
                
        except Exception as e:
            await interaction.followup.send(
                f"❌ Fehler beim Laden des Videos: {str(e)}\n"
                f"Bitte überprüfe die URL und versuche es erneut."
            )
            print(f"Fehler beim Video-Laden: {e}")
            
    except Exception as e:
        await interaction.followup.send(
            f"❌ Fehler beim Starten des Streams: {str(e)}"
        )
        print(f"Fehler in film_play: {e}")

async def film_stop(interaction: discord.Interaction):
    """Stoppt den aktuellen Stream"""
    try:
        guild_id = interaction.guild.id
        user_id = interaction.user.id
        
        if guild_id not in streaming_sessions:
            await interaction.response.send_message(
                "❌ Bot ist nicht im Voice Channel!",
                ephemeral=True
            )
            return
        
        session = streaming_sessions[guild_id]
        
        if session['owner'] != user_id:
            await interaction.response.send_message(
                "❌ Nur der Benutzer, der den Bot eingeladen hat, kann den Stream stoppen!",
                ephemeral=True
            )
            return
        
        if 'current_stream' in session:
            title = session['current_stream']['title']
            del session['current_stream']
            await interaction.response.send_message(
                f"⏹️ Stream **{title}** wurde gestoppt."
            )
            print(f"[{datetime.now()}] Stream stopped: {title}")
        else:
            await interaction.response.send_message(
                "❌ Es läuft aktuell kein Stream!",
                ephemeral=True
            )
            
    except Exception as e:
        await interaction.response.send_message(
            f"❌ Fehler beim Stoppen des Streams: {str(e)}",
            ephemeral=True
        )
        print(f"Fehler in film_stop: {e}")

# Cog laden
async def setup():
    cog = FilmBot(bot)
    await bot.add_cog(cog)

# Bot starten
async def main():
    async with bot:
        await setup()
        await bot.start(TOKEN)

if __name__ == "__main__":
    if not TOKEN:
        print("❌ FEHLER: Discord Token nicht gefunden! Bitte .env Datei überprüfen.")
    else:
        asyncio.run(main())





