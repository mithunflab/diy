import { useState } from 'react';
import { Badge, Button, Card, IconButton, Input, StatusIndicator, Tooltip } from '../app/components/ui';
import { LoadingDots } from '../app/components/ui/LoadingDots';
import { ConfirmationDialog } from '../app/components/ui/Dialog';
import { GradientCard } from '../app/components/ui/GradientCard';
import { TabsWithSlider } from '../app/components/ui/TabsWithSlider';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('components');
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const tabs = [
    { id: 'components', label: 'Components' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' }
  ];

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Bolt.diy Frontend Components
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the UI components extracted from the Bolt.diy application, 
            now running in Lovable's environment.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <TabsWithSlider
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Content based on active tab */}
        {activeTab === 'components' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Buttons */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Buttons</h3>
              <div className="space-y-3">
                <Button onClick={handleAction} disabled={loading}>
                  {loading ? <LoadingDots text="Loading" /> : 'Primary Button'}
                </Button>
                <Button variant="secondary">Secondary Button</Button>
                <IconButton icon="i-ph:heart" title="Like" />
              </div>
            </Card>

            {/* Status & Badges */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Status & Badges</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Error</Badge>
                </div>
                <div className="flex gap-2 items-center">
                  <StatusIndicator status="online" label="Online" />
                  <StatusIndicator status="warning" label="Warning" pulse />
                  <StatusIndicator status="error" label="Error" />
                </div>
              </div>
            </Card>

            {/* Form Elements */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Form Elements</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input 
                    placeholder="Enter your name..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={() => setIsDialogOpen(true)}
                  variant="outline"
                >
                  Open Dialog
                </Button>
              </div>
            </Card>

            {/* Gradient Cards */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Gradient Cards</h3>
              <div className="space-y-3">
                <GradientCard seed="project1" className="p-4">
                  <p className="text-white font-medium">Project Alpha</p>
                  <p className="text-white/80 text-sm">React Application</p>
                </GradientCard>
                <GradientCard seed="project2" className="p-4">
                  <p className="text-white font-medium">Project Beta</p>
                  <p className="text-white/80 text-sm">Vue.js Application</p>
                </GradientCard>
              </div>
            </Card>

            {/* Tooltips */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Tooltips</h3>
              <div className="space-y-3">
                <Tooltip content="This is a helpful tooltip">
                  <Button variant="outline">Hover for tooltip</Button>
                </Tooltip>
              </div>
            </Card>

            {/* Loading States */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Loading States</h3>
              <div className="space-y-3">
                <LoadingDots text="Processing" />
                <Button onClick={handleAction} disabled={loading}>
                  {loading ? 'Loading...' : 'Trigger Loading'}
                </Button>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Original Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI-powered code generation</li>
                <li>• Real-time code editing</li>
                <li>• File management system</li>
                <li>• Preview integration</li>
                <li>• Terminal access</li>
                <li>• Git integration</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Extracted Components</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete UI component library</li>
                <li>• Custom styling system</li>
                <li>• Interactive elements</li>
                <li>• Status indicators</li>
                <li>• Form components</li>
                <li>• Loading states</li>
              </ul>
            </Card>
          </div>
        )}

        {activeTab === 'about' && (
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4">About This Demo</h3>
            <div className="prose max-w-none text-gray-600 space-y-4">
              <p>
                This application demonstrates the successful extraction and adaptation of 
                UI components from the Bolt.diy project to run in Lovable's environment.
              </p>
              <p>
                <strong>Original Challenge:</strong> The Bolt.diy project uses Remix + Cloudflare Workers, 
                which is incompatible with Lovable's Vite + React setup.
              </p>
              <p>
                <strong>Solution:</strong> We extracted the frontend components and created a 
                standalone React application that showcases the UI elements while running 
                properly in Lovable's development environment.
              </p>
              <p>
                <strong>Technologies Used:</strong> React, TypeScript, Tailwind CSS, Framer Motion, 
                and the original Bolt.diy UI component library.
              </p>
            </div>
          </Card>
        )}

        {/* Confirmation Dialog Example */}
        <ConfirmationDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onConfirm={() => {
            console.log('Dialog confirmed!');
            setIsDialogOpen(false);
          }}
          title="Example Dialog"
          description="This is an example dialog using the extracted UI components from Bolt.diy."
          confirmLabel="Got it!"
          cancelLabel="Cancel"
        />
      </div>
    </div>
  );
}

export default App;